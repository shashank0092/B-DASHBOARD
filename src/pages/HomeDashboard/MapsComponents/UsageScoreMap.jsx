import { DeckGL } from "@deck.gl/react"
import { APIProvider, Map, limitTiltRange } from "@vis.gl/react-google-maps"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {HeatmapLayer} from '@deck.gl/aggregation-layers';
import "./Map.css"



const UsageScoreMap = () => {

  const [lat, setLat] = useState(null)
  const [lng, setLng] = useState(null)
  const [clusterData, setClusterData] = useState(null);
  const mapFilter=useSelector((state)=>state.mapfilter)
  console.log("this is map filter",mapFilter)


  useEffect(() => {
    const getLocation = () => {
      if (!navigator.geolocation) {
        setError('Geolocation is not supported by your browser');
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude)
          setLng(position.coords.longitude)
        },
        (error) => {
          setError(`Geolocation error: ${error.message}`);
        }
      );
    };

    getLocation();
  }, []);

  useEffect(() => {
    const fetchClusterData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf.h3clusters.json');
        const jsonData = await response.json();
        setClusterData(jsonData);
      } catch (error) {
        console.error('Error fetching cluster data:', error);
      }
    };

    fetchClusterData();
  }, []);

  if (!lat || !lng || !clusterData) {
    return <div>Loading...</div>;
  }


  const GOOGLE_MAPS_MAPS_OPTIONS = {
    id: 'map',
    mapContainerStyle: {
      // width: '90%',
      // height: '100%'
    },
    center: { lat: lat, lng: lng },
    defaultZoom: 13
  };
  const INITIAL_VIEW_STATE = {
    longitude: lat,
    latitude: lng,
    zoom: 13,
    pitch: 0,
    bearing: 0
  };



  const heatmaplayer=[
    new HeatmapLayer({
      id: 'heatmapLayer',
      data:"https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-bike-parking.json",
      getPosition: d => d.COORDINATES,
      getWeight: d => 500,
      aggregation: 'SUM'
    })
  ]
  return (
    <>

      <APIProvider>
        <DeckGL
          initialViewState={{ longitude: lng, latitude: lat, zoom: 6, pitch: 0, bearing: 0 }}
          layers={heatmaplayer}
          controller={true}
          onViewStateChange={limitTiltRange}
          className="static"
          getTooltip={({ object }) => object && ` Total Sells: ${object.mean}`}
        >
          <Map
            defaultCenter={{ lat: lat, lng: lng }}
            defaultZoom={13}

            gestureHandling={'greedy'}
            disableDefaultUI={true}
          />
        </DeckGL>
      </APIProvider>

    </>
  )


}

export default UsageScoreMap
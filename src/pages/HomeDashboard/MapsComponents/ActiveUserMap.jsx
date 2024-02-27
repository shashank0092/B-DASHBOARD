import { DeckGL } from "@deck.gl/react"
import { APIProvider, Map, limitTiltRange } from "@vis.gl/react-google-maps"
import { useEffect, useState } from "react";
import { H3ClusterLayer } from "@deck.gl/geo-layers";
import "./Map.css"
import { activehexData} from "../../../utils/activeuserhexdata";
import { accidenthexData } from "../../../utils/accidenthexdata";
import { sellshexData } from "../../../utils/sellshexdata";
import { useSelector } from "react-redux";




const ActiveUserMap = () => {

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
    defaultZoom: 1
  };
  const INITIAL_VIEW_STATE = {
    longitude: lat,
    latitude: lng,
    zoom: 13,
    pitch: 0,
    bearing: 0
  };

  const clusterlayers = [
    
    new H3ClusterLayer({
      id: 'H3ClusterLayer',
      data: sellshexData,
      getHexagons: d => d.hexIds,
      extruded: false,
      filled: true,
      getFillColor: d => [100, (1 - d.mean / 300) * 350, 0],
      getLineColor: [255, 255, 255],
      lineWidthMinPixels: 1,
      stroked: true,
      pickable: true,
    }),    
  ];


  return (
    <>

      <APIProvider>
        <DeckGL
          initialViewState={{ longitude: lng, latitude: lat, zoom: 6, pitch: 0, bearing: 0 }}
          layers={clusterlayers}
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

export default ActiveUserMap
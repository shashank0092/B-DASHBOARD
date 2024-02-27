import { DeckGL } from "@deck.gl/react"
import { APIProvider, Map, limitTiltRange } from "@vis.gl/react-google-maps"
import { ScatterplotLayer } from '@deck.gl/layers';
import { useEffect, useState } from "react";
import "./Map.css"


const AssetProvisingLiveLocation  = () => {

  const [lat, setLat] = useState(null)
  const [lng, setLng] = useState(null)
 


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

 

  if (!lat || !lng ) {
    return <div>Loading...</div>;
  }


 

  const layers = [
    new ScatterplotLayer({
      id: 'scatter-plot',
      data: [{ position: [lng, lat], size: 1000, color: [255, 0, 0] }],
      getPosition: (d) => d.position,
      getRadius: 10000,
      getColor: [255, 0, 0],
    }),
    
  ];
  return (
    <>

      <APIProvider>
        <DeckGL
          initialViewState={{ longitude: lng, latitude: lat, zoom: 6, pitch: 0, bearing: 0 }}
          layers={layers}
          controller={true}
          onViewStateChange={limitTiltRange}
          className="static"
          // getTooltip={({ object }) => object && `density: ${object.mean}`}
        >
          <Map
            defaultCenter={{ lat: lat, lng: lng }}
            defaultZoom={5}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
          />
        </DeckGL>
      </APIProvider>

    </>
  )


}

export default AssetProvisingLiveLocation
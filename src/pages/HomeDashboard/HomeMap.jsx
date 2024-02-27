import React, { useEffect } from 'react'
import Navbar from '../../layout/Navbar'
import ActiveUserMap from './MapsComponents/ActiveUserMap'
import {Wrapper, Status} from '@googlemaps/react-wrapper';
import { useSelector } from 'react-redux';
import UsageScoreMap from './MapsComponents/UsageScoreMap';


export default function HomeMap() {
  const Filter=useSelector((state)=>state.mapfilter)
  useEffect(()=>{

  },[Filter])
  const center = {lat: 51.47, lng: 0.45};
  const zoom = 5;
  const renderMap = status => {
    if (status === Status.LOADING) return <h3>{status} ..</h3>;
    if (status === Status.FAILURE) return <h3>{status} ...</h3>;
    return null;
  };

  
  
  return (
    <div className='flex flex-col' >
        <div className=''>
          <Navbar/>
        </div>
        <div className=''  >
          <Wrapper apiKey={"AIzaSyACT48wOeY2GteVxA1YaiyrkraguN0rK2Y"} render={renderMap} > 
          {
            Filter=="usageScore"|| Filter=="maintance"?
            (<>
              <UsageScoreMap/>
            </>)
            :
            (
            <>
              <ActiveUserMap/>
            </>)
          }
          </Wrapper>
        </div>
    </div>
  )
}

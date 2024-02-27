import React from 'react'
import Navbar from '../../layout/Navbar'
import { useParams } from 'react-router'
import AssetsInformationBox from '../../components/AssetsProvisioningInformation/AssetsInformationBox'
import {assetinformation} from "../../utils/assetinformation"
import {Wrapper, Status} from '@googlemaps/react-wrapper';
import AssetProvisingLiveLocation from './MapsComponents/AssetProvisingLiveLocation'


export default function AssetsProvisioningMAP() {

  
 
  const renderMap = status => {
    if (status === Status.LOADING) return <h3>{status} ..</h3>;
    if (status === Status.FAILURE) return <h3>{status} ...</h3>;
    return null;
  };


  return (
    <div className='w-[99vw] h-[90vh]]' >
       <div>
          <Navbar/>
       </div>
       <div  >
        <div  >
        <Wrapper apiKey={"AIzaSyACT48wOeY2GteVxA1YaiyrkraguN0rK2Y"} render={renderMap} > 
          <AssetProvisingLiveLocation  />
        </Wrapper>
       
        <AssetsInformationBox assetinformation={assetinformation} />
        </div>
       </div>
    </div>
  )
}

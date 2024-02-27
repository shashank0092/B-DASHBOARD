import React from 'react'

export default function AssetInfo({ asset_info }) {

  return (
    <div className='text-white  ' >
      <div className='px-5 py-1' >
        <div>
          <p className='text-center text-lg font-dm-font font-bold leading-1 ' >Asset Info</p>
        </div>
        <div className='flex flex-col gap-5  w-56 ' >


          <div className='flex items-center ' >
            <div>
              <p className='font-dm-sans text-base font-bold ' >Asset uuid:</p>
            </div>
            <div>
              <p className='font-dm-sans text-sm' > {asset_info?.asset_uuid} </p>
            </div>
          </div>



          <div className='flex items-center   ' >
            <div>
              <p className='font-dm-sans text-base font-bold'> AXONS IMEI:</p>
            </div>
            <div>
              <p className='font-dm-sans text-sm'>{asset_info?.asset_iot_imei}</p>
            </div>
          </div>



          <div className='flex items-center  ' >
            <div>
              <p className='font-dm-sans text-base font-bold' >Connectivty Status:</p>
            </div>
            <div>
              <p className='font-dm-sans text-sm ' > {asset_info.asset_connectivity_status} </p>
            </div>
          </div>



          <div className='flex items-center  '>
            <div>
              <p className='font-dm-sans text-base font-bold'>Model Name:</p>
            </div>
            <div>
              <p className='font-dm-sans text-sm '> {asset_info.model_name} </p>
            </div>
          </div>



          <div className='flex items-center  ' >
            <div>
              <p className='font-dm-sans text-base font-bold' >Asset Status:</p>
            </div>
            <div>
              <p className='font-dm-sans text-sm ' > {asset_info.asset_status} </p>
            </div>

          </div>



          <div className='flex items-center  '>
            <div>
              <p className='font-dm-sans text-base font-bold' >Firmware:</p>
            </div>
            <div>
              <p className='font-dm-sans text-sm ' > {asset_info.firmware} </p>
            </div>
          </div>



          <div>
            <div className='flex items-center  '>
              <div>
                <p className='font-dm-sans text-base font-bold'>Update Status:</p>
              </div>
              <div>
                <p className='font-dm-sans text-sm' > {asset_info.update_staus} </p>
              </div>
            </div>
          </div>



          <div className='flex items-center  ' >
            <div>
              <p className='font-dm-sans text-base font-bold'>Asset Location:</p>
            </div>
            <div >
              <p className='font-dm-sans text-sm '> Gujrat </p>{/* <p> {asset_info?.location?.lng} </p> */}</div>
          </div>



          <div className='flex items-center  '>
            <div  >
              <p className='font-dm-sans text-base font-bold'>Battery:</p>
            </div>
            <div>
              <p className='font-dm-sans text-sm '> {asset_info.soc} </p>
            </div>
          </div>



          <div className='flex items-center  '>
            <div  >
              <p className='font-dm-sans text-base font-bold'>Last Service Date:</p>
            </div>
            <div>
              <p className='font-dm-sans text-sm '> {asset_info.last_maintenance} </p>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

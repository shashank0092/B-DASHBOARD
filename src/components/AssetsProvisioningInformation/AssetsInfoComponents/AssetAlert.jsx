import React from 'react'

export default function AssetAlert({asset_alerts}) {
  console.log(asset_alerts,"this is boi")
  return (
    <div>
      <div className=' text-white rounded-xl flex flex-col gap-1  ' >
       <div>
          <p className='text-center text-lg font-dm-font font-bold ' >Alert</p>
       </div>
       <div className='flex  gap-2 justify-center' >
        {asset_alerts.error_codes.map((error,key)=>{
          return(
            <p className='text-sm  font-dm-font ' key={key} >{error}</p>
          )
        })}
       </div>
      </div>
    </div>
  )
}

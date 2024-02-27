import React from 'react'

export default function AssetImage({asset_image}) {
  return (
    <div>
      <div className='flex flex-col justify-center items-center text-white' >
        <div>
          {/* <p className='text-center  text-sm font-dm-font font-bold ' >Asset Image</p> */}
        </div>
        <div className='' >
        <img src={asset_image} alt="" className=''  />
        </div>
      </div>
    </div>
  )
}

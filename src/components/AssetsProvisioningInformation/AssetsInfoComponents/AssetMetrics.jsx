import React from 'react'

export default function AssetMetrics({asset_metrics}) {
  return (
    <div className='text-white  w-[16vw]'  >
      <div className='flex flex-col gap-2  py-0 px-1 rounded-xl'  >
        <div>
          <p className='text-center text-xl font-dm-font font-bold text-[12px] ' >Asset Metrics</p>
        </div>
        <div className='flex flex-col gap-5 ' >
          <div className='flex gap-2 items-center' >
            <div>
              <p className='font-dm-font text-base font-bold' >Total Distance:</p>
            </div>
            <div>
              <p className='text-sm font-dm-font' >{asset_metrics.total_distance}</p>
            </div>
          </div>
          <div className='flex gap-2 items-center'>
            <div>
              <p className='text-base font-bold font-dm-font'>Average Speed:</p>
            </div>
            <div>
              <p className='text-sm font-dm-font'>{asset_metrics.average_speed}</p>
            </div>
          </div>
          <div className='flex gap-2 items-center'>
            <div>
              <p  className='text-base font-bold font-dm-font' >Battery Condition:</p>
            </div>
            <div>
              <p className='text-sm font-dm-font' >{asset_metrics.soh}</p>
            </div>
          </div>
          <div className='flex gap-2 items-center'>
            <div>
              <p className='text-base font-bold font-dm-font' >Average Km Per Day:</p>
            </div>
            <div>
              <p className='text-sm font-dm-font' >{asset_metrics.average_km_per_day}</p>
            </div>
          </div>
          <div className='flex gap-2 items-center'>
            <div>
              <p className='text-base font-bold font-dm-font' >Average Charging Per Day:</p>
            </div>
            <div>
              <p className='text-sm font-dm-font'  >{asset_metrics.average_charging_per_day}</p>
            </div>
          </div>
          <div className='flex gap-2 items-center ' >
            <div>
              <p className='text-base font-bold font-dm-font' >Charging Count:</p>
            </div>
            <div>
              <p className='text-sm font-dm-font' >{asset_metrics.charge_cycle_count}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

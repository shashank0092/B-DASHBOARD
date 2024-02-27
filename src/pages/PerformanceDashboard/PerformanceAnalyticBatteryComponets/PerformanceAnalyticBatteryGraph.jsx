import React from 'react'
import LineChart from '../../../components/Charts/LineChart'
import AvrageSOHLineChart from './charts/AvrageSOHLineChart'
import PeakDrivingAndChargeHourLineChart from './charts/PeakDrivingAndChargeHourLineChart'
import SocDecreaseLineChart from './charts/SocDecreaseLineChart'
import BatteryAverageDistanceBarChart from './charts/BatteryAverageDistanceBarChart'
import SocRateChangeTemprature from './charts/SocRateChangeTemprature'



export default function PerformanceAnalyticBatteryGraph() {
  return (
    <div>
      <div>
        <div className='flex flex-col gap-16' >
          <div className='flex gap-12' >
            <div className='flex gap-8' >
              <div> <AvrageSOHLineChart /></div>
              <div> <PeakDrivingAndChargeHourLineChart /> </div>
            </div>
            <div>
              <SocRateChangeTemprature/>
            </div>

          </div>
          <div className='mb-5 flex gap-20' >
            <div> <SocDecreaseLineChart /> </div>
            <div> <BatteryAverageDistanceBarChart /> </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

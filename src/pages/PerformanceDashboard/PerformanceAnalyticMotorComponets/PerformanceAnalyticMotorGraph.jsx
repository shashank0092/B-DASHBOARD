import React from 'react'
import MotorEfficiencyOnSpeedRange from "./charts/MotorEfficiencyOnSpeedRange"
import MotorEfficiencyOnTemprature from './charts/MotorEfficiencyOnTemprature'
import MotorPowerOutputTimeUsage from './charts/MotorPowerOutputTimeUsage'



export default function PerformanceAnalyticMotorGraph() {
  return (
    <div>
       <div className='flex flex-col gap-12' >
       <div className='flex justify-around ' >
          <div>
            <MotorEfficiencyOnSpeedRange/>
          </div>
          <div>
            <MotorEfficiencyOnTemprature/>
          </div>
        </div>
        <div className='flex justify-around mb-5 ' >
          <div>
            <MotorPowerOutputTimeUsage/>
          </div>
        </div>
       </div>
    </div>
  )
}

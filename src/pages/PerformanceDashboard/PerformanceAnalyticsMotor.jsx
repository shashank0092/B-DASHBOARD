import React from 'react'
import Navbar from '../../layout/Navbar'
import PerformanceAnalyticMotorWidgets from "./PerformanceAnalyticMotorComponets/PerformanceAnalyticMotorWidgets"
import PerformanceAnalyticMotorGraph from './PerformanceAnalyticMotorComponets/PerformanceAnalyticMotorGraph'


export default function PerformanceAnalyticsMotor() {
  return (
    <div className="bg-[#F9F9F9] h-[100vh] w-[98vw]" >
        <div>
            <Navbar/>
        </div>
        <div className='mt-5 flex flex-col gap-10' >
          <div >
            <PerformanceAnalyticMotorWidgets/>
          </div>
         <div>
          <PerformanceAnalyticMotorGraph/>
         </div>
        </div>

        
    </div>
  )
}

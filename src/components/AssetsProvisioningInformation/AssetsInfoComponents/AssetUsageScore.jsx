import React from 'react'
import LineChart from '../../Charts/LineChart'
import Chart from "react-apexcharts"


export default function AssetUsageScore() {
  const options = {
    
   
      chart: {
       sparkline:{
        enabled:true
       }
      },
      xaxis: {
        categories: [1,2,3,4,5,6,7],
        labels:{
          show:false
        }
      },
      stroke: {
        width: 2
      },
     colors:["#4D49FF"],
     tooltip:{
      theme:"dark"
     }

    
  };

  const series=[
    {
      name: 'Usage Score',
      data: [50,60,20,30,40,100,20],
      
    },
  ]
  return (
    <div>
     <div className=" text-white px-0 py-0 rounded-xl " >
        <div>
          <p className='text-center text-lg font-dm-font font-bold '>Asset Usage Score</p>
        </div>
        <div className=' ' >
          <div className='w-[18vw] h-18  '>
            <Chart
            options={options} 
            series={series} 
            type={"line"} 
            height={50}
            
            />
          </div>
        </div>
     </div>
    </div>
  )
}

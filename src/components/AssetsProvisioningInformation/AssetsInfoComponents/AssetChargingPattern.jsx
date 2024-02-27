import React from 'react'
import Chart from "react-apexcharts"

export default function AssetChargingPattern() {
  const options = {
    chart: {
    
      sparkline:{
        enabled:true
       }
    },
    xaxis: {
      categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    stroke: {
      width: 2,
      
    },
    colors:["#E3C96D"],
    tooltip:{
      theme:"dark"
     }

  };

  const series = [
    {
      name: 'Charging Pattern',
      data: [50, 60, 20, 30, 40, 100, 20, 40, 30, 80],
    }
  ]
  return (
    <div>
    <div className=" text-white  rounded-xl " >
       <div>
         <p className='text-center text-lg font-dm-font font-bold '>Asset Charging Pattern</p>
       </div>
       <div className=' ' >
         <div className='w-[20vw] h-5  '>
           <Chart
           options={options} 
           series={series} 
           type={"line"} 
           height={30}
           
           />
         </div>
       </div>
    </div>
   </div>
  )
}

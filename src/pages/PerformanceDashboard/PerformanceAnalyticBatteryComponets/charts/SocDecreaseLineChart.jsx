import React from 'react'
import Chart from "react-apexcharts"


export default function SocDecreaseLineChart () {

  const options = {

  
      chart: {
       
      },
      xaxis: {
        categories: [1, 2, 3, 4, 5, 6, 7],
        title:{
          text:"km travelled"
        }
      },
      yaxis:{
        title:{
          text:"SOC Decrease Rate"
        }
      },
      stroke: {
        width: 2
      },
      colors:["#8C0D0D"]

   
  };
  const series = [
    {
      name: 'km travelled',
      data: [5, 2, 8, 12, 5, 7, 9],
    },
    
  ]


  return (
    <div>

      <div className='w-[30vw] ' >
        <div className='border border-stone-300 rounded-xl bg-white p-5 ' >
          <p className='font-dm-font font-bold' >SOC Decrease Rate</p>
          <Chart
            options={options}
            series={series}
            type={"line"}
            height={300}

          />
        </div>
      </div>

    </div>
  )
}

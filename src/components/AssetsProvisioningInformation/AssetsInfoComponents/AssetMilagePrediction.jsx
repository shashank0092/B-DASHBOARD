import React from 'react'
import Chart from "react-apexcharts"
export default function AssetMilagePrediction() {

  const options = {
    chart: {

      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
      

    },
    
    legend: {
      show: false,
      showForSingleSeries: true,
      customLegendItems: ['Actual', 'Expected'],
      markers: {
        fillColors: ['#00E396', '#775DD0']
      },
      position:"bottom"
    },
    colors:['#F04949'],
    tooltip:{
      theme:"dark",
    }
  }

  const series = [
    {
      name:"Actual Milage",
      
      data:[
        {
          x:"",
          y:12,
          goals:[
            {
              name:"Expected Milage",
              value: 14,
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: '#A2EA90'
            }
          ]
        }

      ]
    }
  ]

  return(
    <div>
    <div className=" text-white  rounded-xl  " >
      <div>
        <p className='text-center text-lg font-dm-font font-bold '>Asset Milage Prediction</p>
      </div>
      <div  >
        <div className=' h-6  flex justify-center items-center'>
          <Chart
            options={options}
            series={series}
            type={"bar"}
            height={5}
            className=""

          />
        </div>
      </div>
    </div>
    </div >
  )
}

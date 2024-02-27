import React from 'react'
import Chart from "react-apexcharts"


export default function PeakDrivingAndChargeHourLineChart() {

  const options = {


    xaxis: {
      categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
      title:{
        text:"Hours"
      }
    },
    yaxis:{
      title:{
        text:"Peak Points"
      }
    },
    stroke: {
      width: 2
    },
    chart:{
      toolbar:{
        show:true,
        tools:{
          selection: false,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan:false,
          reset: true,
        },}
    },
    colors:["#FF4949","#1C610A"]


  };
  const series = [
    {
      name: 'Charge Hour',
      data: [5, 2, 8, 12, 5, 5, 2, 8, 12, 5, 5, 2, 8, 12, 5, 5, 2, 8, 12, 5, 5, 2, 8, 12,],
    },
    {
      name: 'Driving Hour',
      data: [6, 5, 4, 8, 9, 6, 5, 4, 8, 9, 6, 5, 4, 8, 9, 6, 5, 4, 8, 9, 6, 5, 4, 8, 9],
    },

  ]


  return (
    <div>

      <div className='w-[30vw] ' >
        <div className='border border-stone-300 rounded-xl bg-white p-5 ' >
          <p className='font-dm-font font-bold' >Peak Driving & Charge Hours</p>
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

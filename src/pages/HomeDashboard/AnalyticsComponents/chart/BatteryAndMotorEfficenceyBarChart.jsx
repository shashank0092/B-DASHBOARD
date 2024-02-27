import React from 'react'
import Chart from 'react-apexcharts';

export default function BatteryAndMotorEfficenceyBarChart() {
  const date=new Date()
  const options = {

    chart:{
      toolbar:{
        show:true,
        tools:{
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
        },
        export:{
          csv:{
            filename:`Battery And Motor Efficencey ${date.toLocaleDateString()} `,
            columnDelimiter: ',',
            headerCategory: 'Battery And Motor Type',
            headerValue: 'Efficencey',
          },
          svg: {
            filename: `Battery And Motor Efficencey ${date.toLocaleDateString()} `,
          },
          png: {
            filename: `Battery And Motor Efficencey ${date.toLocaleDateString()} `,
          }
        }
      }
    }
    ,
    dataLabels: {
      enabled: false 
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '70%',
        endingShape: 'rounded',

      },
    },
    xaxis: {
      categories: ["B1 M1", "B2 M2", "B3 M3", "B4 M4", "B5 M5"], // Categories for Battery
      title:{
        text:"Types Of Battery & Motor"
      }
    },

    yaxis: {
      title: {
        text: '% of Ffficiency',
      },
    },

 
    fill: {
      opacity: 1,
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      offsetX: 0,
    },



   
  };

  const series = [
    {
      name: 'Battery',
      data: [10, 15, 22, 35, 40],


    },
    {
      name: 'Motor',
      data: [15, 20, 35, 40, 20],

    },

  ];
  return (
    <div>
      <div className='border border-stone-300 rounded-xl bg-white p-5 ml-10 ' >
        <p className='font-dm-font font-bold' >Battery and Motor Efficencey</p>
        <Chart options={options} series={series} type={"bar"} height={300} />
      </div>
    </div>
  )
}

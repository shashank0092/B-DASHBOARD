import React from 'react'
import Chart from 'react-apexcharts';

export default function VehicleStatusBarChart() {
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
      categories: ["On Ride","Off Ride","Parking","Charging"], 
      title:{
        text:"Vehicle Status"
      }
    },

    yaxis: {
      title: {
        text: 'Count of Vehicle',
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
    colors:['#E3C96D']


   
  };

  const series = [
    {
      name: 'Vehical',
      data: [10, 15, 22, 35, 40],


    },
   

  ];
  return (
    <div>
      <div className='border border-stone-300 rounded-xl bg-white p-5 ml-10 ' >
        <p className='font-dm-font font-bold' >Vehicle Status</p>
        <Chart options={options} series={series} type={"bar"} height={300} />
      </div>
    </div>
  )
}

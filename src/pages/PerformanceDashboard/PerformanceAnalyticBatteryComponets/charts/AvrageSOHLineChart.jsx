import React from 'react'
import Chart from "react-apexcharts"


export default function AvrageSOHLineChart () {
  const date=new Date()
  const options = {

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
        },
        export:{
          csv:{
            filename:`Average SOH Based On Usage Score ${date.toLocaleDateString()} `,
            columnDelimiter: ',',
            
          },
          svg: {
            filename: `Average SOH Based On Usage Score ${date.toLocaleDateString()} `,
          },
          png: {
            filename: `Average SOH Based On Usage Score ${date.toLocaleDateString()}`,
          }
        }
      }
    },

      stroke: {
        width: 2
      },
      labels: ['01 Jan ', '02 Jan ', '03 Jan ', '04 Jan ', '05 Jan ', '06 Jan ', '07 Jan ', '08 Jan ', '09 Jan ', '10 Jan ', '11 Jan ', '12 Jan '],
      xaxis: {
        type: 'datetime'
      },
  
      yaxis: [
        {
          title:{
            text:"Usage Score"
          }
        },
        {
          opposite:true,
          title:{
            text:"Average SOH"
          }
        }
      ],
    
  };
  const series = [
    {
      name: 'B1',
      type:"line",
      data: [50, 60, 20, 30, 40, 100, 20],
    },
    {
      name: 'B2',
      type:"line",
      data: [80, 20, 40, 70, 50, 70, 40],
    },
    {
      name: 'B3',
      type:"line",
      data: [22, 85, 45, 12, 74, 23, 96],
    },
  ]


  return (
    <div>

      <div className='w-[30vw] ' >
        <div className='border border-stone-300 rounded-xl bg-white p-5 ' >
        <p className='font-dm-font font-bold' >Average SOH</p>
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

import React from 'react'
import Chart from "react-apexcharts"

export default function BatteryAverageDistanceBarChart() {
  const date=new Date()

  const options = {

    options: {
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
              filename:`Battery Avearge Distance ${date.toLocaleDateString()} `,
              columnDelimiter: ',',
              headerCategory: 'Type Of Battery',
              headerValue: 'Average Distance',
            },
            svg: {
              filename: `Battery Avearge Distance ${date.toLocaleDateString()} `,
            },
            png: {
              filename: `Battery Avearge Distance ${date.toLocaleDateString()} `,
            }
          }
        }
      }
    },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '80%',
          endingShape: 'rounded'
        },
    },
    xaxis: {
      categories: ['B1', 'B2', 'B3', 'B4', 'B5',"B6","B7","B8","B9","B10"],
      title:{
        text:"Type Of Battery"
      }
    },
    yaxis: {
      title: {
        text: 'Average Distance(KM)'
      }
    },
    fill: {
      opacity: 1
    },
    dataLabels: {
      enabled: false 
    },
    colors: [function({ value, seriesIndex, w }) {
        if (value <50) {
            return '#8E5353'
        } else {
            return '#A2EA90'
        }
      }]
    

   
  }
  const series=[{
    name: 'Distance',
    data: [50,30,40,70,100,80,110,20,40,55]
  }]
  return (
    <div>

      <div className='w-[30vw] ' >
        <div className='border border-stone-300 rounded-xl bg-white p-5 ' >
        <p className='font-dm-font font-bold' >Average SOH</p>
          <Chart
            options={options}
            series={series}
            type={"bar"}
            height={300}

          />
        </div>
      </div>

    </div>
  )
}

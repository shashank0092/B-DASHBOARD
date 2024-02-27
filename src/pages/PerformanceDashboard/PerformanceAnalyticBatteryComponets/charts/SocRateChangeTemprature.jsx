import React from 'react'
import Chart from "react-apexcharts"
export default function SocRateChangeTemprature() {
  const options = {
    yaxis: {
      labels: {
        formatter: (value, index) => {
          return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'][index];
        },
      },
    },

    xaxis: {
      categories: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120], // Dummy data for the x-axis
    },
    stroke: {
      width: 2
    }
  };

  const series = [{
    name: 'Changes',
    data: [45, 20, 75, 30, 42, 38, 55, 65, 128, 135, 22, 35]
  }]


  return (
    <div>

      <div className='w-[30vw] ' >
        <div className='border border-stone-300 rounded-xl bg-white p-5 ' >
          <p className='font-dm-font font-bold' >SOC Rate Change Via Temprature</p>
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

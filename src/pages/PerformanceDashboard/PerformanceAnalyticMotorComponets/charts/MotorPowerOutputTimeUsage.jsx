import React from 'react'
import Chart from "react-apexcharts"

export default function MotorPowerOutputTimeUsage() {

    const options = {
        chart: {
            type: 'area'
        },
        xaxis: {
            categories: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
            title: {
                text: "Time"
            },
        },
        yaxis: {
            title: {
                text: "Power"
            }
        },
        stroke: {
            // width: 2,
            // dashArray: 2
        },
        dataLabels: {
            enabled: false
          },
  
    };

    const series = [{
        name: 'Motor 1',
        data: [45, 20, 75, 30, 42, 38, 55, 65, 128, 135, 22, 35]
    },{
        name: 'Motor 2',
        data: [35, 45, 55, 65, 75, 85, 95, 105, 115, 125, 135, 145]
    },{
        name: 'Motor 3',
        data: [25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125, 135]
    }];
  return (
    <div>
    <div>

        <div className='w-[90vw] ' >
            <div className='border border-stone-300 rounded-xl bg-white p-5 ' >
                <p className='font-dm-font font-bold' >Changes In Power</p>
                <Chart
                    options={options}
                    series={series}
                    type={"area"}
                    height={300}

                />
            </div>
        </div>

    </div>
</div>
  )
}

import React from 'react'
import Chart from "react-apexcharts"

export default function MotorEfficiencyOnSpeedRange() {

    const options = {
        chart:{
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 10,
                left: 10,
                blur: 10,
                color: '#000',
                opacity: 0.5
            }
        },

        xaxis: {
            categories: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120], // Dummy data for the x-axis
            title:{
                text:"Speed Range"
            }
        },

        yaxis:{
            title:{
                text:"Efficiency"
            }
        },
        stroke: {
            width: 5,
            dashArray:2
        },
        grid:{
            show:false
        },
        colors:["#F04949"]
    };

    const series = [{
        name: 'Efficiency',
        data: [45, 20, 75, 30, 42, 38, 55, 65, 128, 135, 22, 35]
    }]
    return (
        <div>
            <div>

                <div className='w-[40vw] ' >
                    <div className='border border-stone-300 rounded-xl bg-white p-5 ' >
                        <p className='font-dm-font font-bold' >Fluctuation in Efficiency on speed range</p>
                        <Chart
                            options={options}
                            series={series}
                            type={"line"}
                            height={300}

                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

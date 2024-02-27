import React from 'react'
import Chart from "react-apexcharts"

export default function MotorEfficiencyOnTemprature() {
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

        xaxis: 
            {
                categories: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120], // Dummy data for the x-axis
                title:{
                    text:"Temprature"
                },
                
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
        colors:["#3EA025"],
        grid:{
            show:false
        },
       

    };

    const series = [{
        name: 'Efficiency',
        data: [20,45,78,45,72,15,25,96,45,16,36,28],
        type:"line",
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 0.2,
                opacityFrom: 0.7,
                opacityTo: 0.3,
                stops: [0, 90, 100]
            }
        }
    }]
    return (
        <div>
            <div>

                <div className='w-[40vw] ' >
                    <div className='border border-stone-300 rounded-xl bg-white p-5 ' >
                        <p className='font-dm-font font-bold' >Efficiency on Temprature</p>
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

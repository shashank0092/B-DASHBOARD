import React, { useState } from 'react'
import Chart from "react-apexcharts"
import Battery6BarIcon from '@mui/icons-material/Battery6Bar';
import ModeFanOffIcon from '@mui/icons-material/ModeFanOff';
import { IconButton } from '@mui/material';


export default function MotorPowerOutputTimeUsage() {

  const [currentChart, setCurrentChart] = useState("battery")

  const MotorOptions = {
    chart: {
      type: 'area',
      foreColor: '#FFFFFF',


      toolbar: {
        show: false,
        tools: {
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
        },
      }
    },
    xaxis: {
      categories: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
      title: {
        text: "Motor"
      },
    },
    yaxis: {
      title: {
        text: "Efficencey",
      }
    },
    stroke: {

    },
    dataLabels: {
      enabled: false
    },
    grid: {
      show: false
    },
    tooltip: {
      theme: "dark",
    }

  };

  const MotorSeries = [{
    name: 'City',
    data: [25, 35, 15, 75, 128, 75, 40, 55, 85, 20, 35, 22]
  }, {
    name: 'Highway',
    data: [75, 28, 21, 36, 96, 145, 20, 66, 34, 92, 28, 50]
  }, {
    name: 'Lane Change',
    data: [85, 25, 45, 20, 17, 74, 35, 19, 20, 125, 145, 25]
  }];


  const BatteryOptions = {
    chart: {
      type: 'area',
      foreColor: '#FFFFFF',


      toolbar: {
        show: false,
        tools: {
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
        },
      }
    },
    xaxis: {
      categories: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
      title: {
        text: "Battery"
      },
    },
    yaxis: {
      title: {
        text: "Efficencey",
      }
    },
    stroke: {

    },
    dataLabels: {
      enabled: false
    },
    grid: {
      show: false
    },
    tooltip: {
      theme: "dark",
    }

  };

  const BatterySeries = [{
    name: 'City',
    data: [35,10,25,75,89,10,26,13,78,45,10,55,98,52,63,75]
  }, {
    name: 'Highway',
    data: [45,52,10,7,128,74,89,63,25,74,10,64,35,20,75,63]
  }, {
    name: 'Lane Change',
    data: [33,56,64,22,128,79,63,22,74,63,45,55,35,49,135,20]
  }];
  return (
    <div>
      {
        currentChart == "motor" ?
          (
            <>
              <div className=" text-white px-0 py-0    rounded-xl" >
                <div className='flex justify-around' >
                  <div><p className='text-center  font-dm-font text-lg font-bold '>Motor Efficiency Pattern</p></div>
                  <div>
                    <IconButton onClick={()=>setCurrentChart("battery")}  >
                      <Battery6BarIcon fontSize='small'sx={{color:"#FFF4F4"}}  />
                    </IconButton>
                  </div>
                </div>
                <div className=' ' >
                  <div className='w-[32vw]'>
                    <Chart
                      options={MotorOptions}
                      series={MotorSeries}
                      type={"area"}
                      height={170}

                    />
                  </div>
                </div>
              </div>
            </>
          ) :

          (
            <>
              <div className=" text-white px-0 py-0    rounded-xl" >
                <div className='flex justify-around' >
                  <div><p className=' font-dm-font text-lg font-bold '>Battery Efficiency Pattern</p></div>
                  <div  >
                    <IconButton onClick={()=>(setCurrentChart("motor"))} >
                      <ModeFanOffIcon fontSize='small'  sx={{color:"#FFF4F4"}} />
                    </IconButton>
                  </div>
                </div>
                <div className=' ' >
                  <div className='w-[32vw]'>
                    <Chart
                      options={BatteryOptions}
                      series={BatterySeries}
                      type={"area"}
                      height={170}

                    />
                  </div>
                </div>
              </div>
            </>
          )
      }
    </div>
  )
}

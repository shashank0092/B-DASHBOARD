import React from 'react'
import NumberWidgets from "../../../components/Widgets/NumberWidgets"
import PowerIcon from '@mui/icons-material/Power';
import FunctionsIcon from '@mui/icons-material/Functions';
import MultipleNumberWidget from '../../../components/Widgets/MultipleNumberWidget';
import StarsIcon from '@mui/icons-material/Stars';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
export default function PerformanceAnalyticMotorWidgets() {
    const asset = {
        title: "Average",
        titleIcon: <FunctionsIcon/>,
        values: [
            { "subtitle": "Average Voltage", "count": "50", icon: "" },
            { "subtitle": "Average Current", "count": "25", icon: "" },

        ]
    }
  return (
    <div>
        <div className='flex justify-around' >
            <div>
                <NumberWidgets
                bgColor={"white"}
                title={"Average Power"}
                count={50}
                countType={"%"}
                icon={<PowerIcon/>}
                width={80}
                
                />
            </div>
            <div>
            <MultipleNumberWidget
                        bgColor={"white"}
                        assets={asset}
                        width={80}
                        height={36}

                    />
            </div>
            <div>
            <NumberWidgets
                bgColor={"white"}
                title={"Most Efficient Motor"}
                count={"Power Pack 720"}
                countType={"%"}
                icon={<StarsIcon/>}
                width={80}
                
                />
            </div>
            <div>
            <NumberWidgets
                bgColor={"white"}
                title={"Alert Error Codes"}
                count={50}
                countType={""}
                icon={<ReportProblemIcon/>}
                width={80}
                
                />
            </div>
        </div>
    </div>
  )
}

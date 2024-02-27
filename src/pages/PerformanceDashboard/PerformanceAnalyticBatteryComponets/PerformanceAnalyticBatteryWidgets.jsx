import React from 'react'
import NumberWidgets from '../../../components/Widgets/NumberWidgets'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import TimelineIcon from '@mui/icons-material/Timeline';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import StarIcon from '@mui/icons-material/Star';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

export default function PerformanceAnalyticBatteryWidgets() {
    return (
        <div>
            <div className='flex justify-around' >
                <div>
                    <NumberWidgets
                        bgColor={"white"}
                        title={"Average SOH"}
                        count={50}
                        countType={""}
                        icon={<HealthAndSafetyIcon/>}
                        width={80}
                    // height={80}
                    />
                </div>
                <div>
                    <NumberWidgets
                        bgColor={"white"}
                        title={"Average Life Span"}
                        count={50}
                        countType={""}
                        icon={<TimelineIcon/>}
                        width={80}
                    // height={80}
                    />
                </div>
                <div>
                    <NumberWidgets
                        bgColor={"white"}
                        title={"Decrease Rate Of SOH"}
                        count={20}
                        countType={"%"}
                        icon={<HeartBrokenIcon/>}
                        width={80}
                    // height={80}
                    />
                </div>
                <div>
                    <NumberWidgets
                        bgColor={"white"}
                        title={"Most Efficient Battery"}
                        count={"Power Pack 720"}
                        countType={""}
                        icon={<StarIcon/>}
                        width={80}
                    // height={80}
                    />
                </div>
                <div>
                    <NumberWidgets
                        bgColor={"white"}
                        title={"LOW SOH BATTERY"}
                        count={50}
                        countType={"%"}
                        icon={<TrendingDownIcon/>}
                        width={80}
                    // height={80}
                    />
                </div>

            </div>
        </div>
    )
}

import Navbar from "../../layout/Navbar"
import PerformanceAnalyticBatteryWidgets from "./PerformanceAnalyticBatteryComponets/PerformanceAnalyticBatteryWidgets"
import PerformanceAnalyticBatteryGraph from "./PerformanceAnalyticBatteryComponets/PerformanceAnalyticBatteryGraph"


const PerformanceAnalyticsBattery = () => {
    return (
        <div>
            <div className="bg-[#F9F9F9] h-[100vh] w-[98vw]" >
                <div>
                    <Navbar />
                </div>
                <div className="mt-5" >
                    <PerformanceAnalyticBatteryWidgets />
                </div>
                <div className="mt-10  ml-5" >
                    <div>
                    <PerformanceAnalyticBatteryGraph />
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default PerformanceAnalyticsBattery
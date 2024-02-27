import Navbar from "../../layout/Navbar"
import HomeDashboardGraphWidgets from "./AnalyticsComponents/HomeDashboardGraphWidgets"
import HomeDashboardWidgets from "./AnalyticsComponents/HomeDashboardWidgets"
import BatteryAndMotorEfficenceyBarChart from "./AnalyticsComponents/chart/BatteryAndMotorEfficenceyBarChart"
import VehicleStatusBarChart from "./AnalyticsComponents/chart/VehicleStausBarChart"


const HomeAnalytics = () => {


    return (
        <>
            <div className="bg-[#F9F9F9] h-[100vh] w-[100vw]" >
                <div>
                    <Navbar />
                </div>
               
                <div className="mt-5" >
                    <div>
                        <HomeDashboardWidgets/>
                    </div>
                    <div className="flex gap-32 " >
                        <div className="w-[30vw] mt-10"  >
                            <BatteryAndMotorEfficenceyBarChart/>
                        </div>
                        <div className="w-[30vw] mt-10"  >
                            <VehicleStatusBarChart/>
                        </div>
                        <div className="mt-10" >
                            <HomeDashboardGraphWidgets/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeAnalytics
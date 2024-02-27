import Navbar from "../../layout/Navbar"
import AssetsProvisingWidgets from "./AnalyticsComponents/AssetsProvisingWidgets"
import AssetsProvisingTable from "./AnalyticsComponents/AssetsProvisingTable"
import AssetsProvisingTableWidget from "./AnalyticsComponents/AssetsProvisingTableWidget"


const AssetsProvisioningAnalytics=()=>{
    return(
        <>
            <div className="w-[100vw] h-[100vh] bg-[##F9F9F9]" >
            <div>
                <Navbar/>
            </div>

            <div className="mt-5" >
                <div>
                    <AssetsProvisingWidgets/>
                </div>
                <div className="flex" >
                    <div className="flex-grow  p-7" >
                        <AssetsProvisingTable/>
                    </div>
                    <div className="mt-20" >
                        <AssetsProvisingTableWidget/>
                    </div>
                </div>
            </div>
            </div>
            
        </>
    )
}

export default AssetsProvisioningAnalytics
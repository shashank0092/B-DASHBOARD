import { createBrowserRouter } from "react-router-dom"
import Login from "../pages/Login/Login";
import HomeAnalytics from "../pages/HomeDashboard/HomeAnalytics";
import AssetsProvisioningAnalytics from "../pages/AssetsProvisioningDashboard/AssetsProvisioningAnalytics";
import HomeMap from "../pages/HomeDashboard/HomeMap";
import AssetsProvisioningMap from "../pages/AssetsProvisioningDashboard/AssetsProvisioningMap";
import PerformanceAnalyticsBattery from "../pages/PerformanceDashboard/PerformanceAnalyticsBattery";
import PerformanceAnalyticsMotor from "../pages/PerformanceDashboard/PerformanceAnalyticsMotor";
import ActiveUserMap from "../pages/HomeDashboard/MapsComponents/ActiveUserMap";


export const routes=createBrowserRouter([
    {
        path:"/",
        element:<Login/>        
    },
    {
        path:"/home/analytics",
        element:<HomeAnalytics/>
    },
    {
        path:"/assetsProvisioning/analytics",
        element:<AssetsProvisioningAnalytics/>
    },
    {
        path:"/performance/analytics/battery",
        element:<PerformanceAnalyticsBattery/>
    },
    {
        path:"/performance/analytics/motor",
        element:<PerformanceAnalyticsMotor/>
    },
    {
        path:"/home/maps",
        element:<HomeMap/>
    },
    {
        path:"/assetsProvisioning/maps/:uid",
        element:<AssetsProvisioningMap/>
    },
])
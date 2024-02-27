import React from 'react'
import AssetImage from "./AssetsInfoComponents/AssetImage"
import AssetInfo from "./AssetsInfoComponents/AssetInfo"
import AssetMetrics from "./AssetsInfoComponents/AssetMetrics"
import AssetUsageScore from "./AssetsInfoComponents/AssetUsageScore"
import AssetChargingPattern from "./AssetsInfoComponents/AssetChargingPattern"
import AssetMilagePrediction from "./AssetsInfoComponents/AssetMilagePrediction"
import AssetEfficiency from "./AssetsInfoComponents/AssetEfficiency"
import AssetAlert from './AssetsInfoComponents/AssetAlert'


export default function AssetsInformationBox({ assetinformation }) {

    return (
        <div  >
            <div className='flex  absolute  left-[45vw] top-[12vh] border border-black px-0 py-2 gap-0 rounded-xl bg-black opacity-80 ' >
                <div className='flex flex-col gap-2' >
                    <div className='  rounded-xl ' >
                        <AssetImage asset_image={assetinformation[0].asset_image} />
                    </div>
                    <div className='  rounded-xl'>
                        <AssetInfo asset_info={assetinformation[0].asset_info} />
                    </div>
                </div>
                <div className='flex flex-col gap-6' >
                    <div className='flex gap-0' >
                        <div>
                            <AssetMetrics asset_metrics={assetinformation[0].asset_metrics} />
                        </div>
                        <div className='flex flex-col gap-10' >
                            <div className='flex flex-col gap-5' >
                                <div>
                                    <AssetUsageScore />
                                </div>
                                <div>
                                    <AssetAlert asset_alerts={assetinformation[0].asset_alerts} />
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <div><AssetChargingPattern /></div>

                            </div>
                        </div>
                    </div>

                    <div className=' flex flex-col gap-2 ' >
                        <div><AssetMilagePrediction /></div>
                        <div> <AssetEfficiency /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

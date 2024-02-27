const MultipleNumberWidget = ({ width, height, assets, bgColor, textColor }) => {
    return (
        <>
            <div>
                <div className={`bg-${bgColor} w-${width} h-${height}  border border-stone-300 rounded-xl shadow-number-widget-shadow   `} >
                    <div className="flex flex-col p-7" >
                        <div className="flex gap-3" >
                            <div>
                                <p className="font-dm-font text-xl font-bold  " > {assets.title}</p>
                            </div>
                            <div>
                                <p>{assets.titleIcon}</p>
                            </div>
                        </div>
                        {
                            assets.values.map((asset,key) => {
                                return (
                                    
                                        <div className="flex gap-2" key={key}>
                                            <div>
                                                <p className="font-dm-font text-lg font-bold"  > {asset.subtitle} </p>
                                            </div>
                                            <div className="flex " >
                                                <p className="font-dm-font text-lg font-bold" >{asset.count}</p>
                                                <p>{asset.countType}</p>
                                            </div>
                                        </div>
                                    
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default MultipleNumberWidget
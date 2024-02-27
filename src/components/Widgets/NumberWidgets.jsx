const NumberWidgets = ({ width, height, title, count, icon, bgColor, countType,textColor }) => {
    return (
        <>
            <div>
                <div className={`bg-${bgColor} w-${width} py-10  border border-stone-300 rounded-xl shadow-number-widget-shadow  `} >
                    <div className={`flex flex-col px-5  w-full justify-center`} >
                        <div className="flex  gap-3" >
                            <div>
                                <p className="font-dm-font text-xl font-bold  " > {title}</p>
                            </div>
                            <div>
                                <p>{icon}</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-2xl font-dm-font font-semibold  " >{count} {countType}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default NumberWidgets;
import Chart from 'react-apexcharts';


const GroupedColoumnBarChart=({options,series,type,height})=>{
    return(
        <>
            <div className='border border-stone-300 rounded-xl bg-white p-5 ml-10 ' >
            <Chart options={options} series={series} type={type} height={height} />
            </div>
        </>
    )
}

export default GroupedColoumnBarChart
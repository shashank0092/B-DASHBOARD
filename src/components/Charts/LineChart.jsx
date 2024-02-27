import Chart from 'react-apexcharts';
const LineChart=({options,series,type,height})=>{
   
    return(
        <>
            <div className='border border-stone-300 rounded-xl bg-white p-5 py-0  ' >
            <Chart options={options} series={series} type={type} height={height} />
            </div>
        </>
    )
}

export default LineChart
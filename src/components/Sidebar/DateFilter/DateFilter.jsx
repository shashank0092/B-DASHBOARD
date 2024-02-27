import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import moment from "moment"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../../store/slice/filterSlice';
import "./datefilter.css"


const DateFilter=()=>{
    const [currentDate,setCurrentDate]=useState(null)
    const[fromDate,setFromDate]=useState(null)
    const[toDate,setToDate]=useState(null)

    const filter=useSelector((state)=>state)
    console.log(filter,"this is filter in redux page")

    const dispatch=useDispatch()
    
    useEffect(()=>{
        const date=moment().format('MM/D/Y')
        setCurrentDate[date]

    },[])

    useEffect(()=>{
        

        if(fromDate==null || toDate==null){
            
            console.log("Please choose both date block")
        }
        else{
            console.log(fromDate,'this is form date')
            console.log(toDate,'this is to date')

            dispatch(setFilter({
                date:{
                    from:fromDate,
                    to:toDate
                }
            }))
        }
        
    },[fromDate,toDate])

    const handleFromDateChange=(date)=>{
        const getDate=date.toDate()
        const dateObj=new Date(getDate)

        const selectedDate=dateObj.toLocaleDateString()
        setFromDate(selectedDate)
        
    }

    const handleToDateChange=(date)=>{
        const getDate=date.toDate()
        const dateObj=new Date(getDate)

        const selectedDate=dateObj.toLocaleDateString()
        setToDate(selectedDate)
        
    }

    return(
            <>
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                                <div className="flex flex-col gap-3" >
                                    <div>
                                        <div>
                                            <p className="text-xs font-dm-font font-bold " >From</p>
                                        </div>
                                        <div  >
                                            <DatePicker 
                                            value={currentDate}
                                            onChange={handleFromDateChange} 
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <p className="text-xs font-dm-font font-bold " >To</p>
                                        </div>
                                        <div>
                                            <DatePicker
                                            value={currentDate}
                                            onChange={handleToDateChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </LocalizationProvider>
            </>
    )
}

export default DateFilter
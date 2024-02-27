import Checkbox from '@mui/material/Checkbox';
import { useEffect, useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../../store/slice/filterSlice';

const RegionFilter = () => {
    const dispatch=useDispatch()
    const[region,setRegion]=useState({
        ahmedabad:false,
        vadodara:false,
        suart:false,
        rajkot:false
    })
    useEffect(()=>{
        const selectedRegions = Object.keys(region).filter(key => region[key]);
        if(selectedRegions.length==0){

        }
        else{
            dispatch(setFilter({
                region:selectedRegions
            }))
        }
    },[region])



    const handleRegionChnage=(name)=>(event)=>{
        setRegion(prevState=>({
            ...prevState,
            [name]:event.target.checked
        }))

       

    }
    return (
        <>
            <div>
                <div>
                    <div className='flex items-center' >
                       <FormControlLabel
                        label="Ahmedabad"
                        control={<Checkbox checked={region.ahmedabad}
                        onChange={handleRegionChnage('ahmedabad')}
                        />}
                       
                       />
                    </div>
                    <div className='flex items-center' >
                    <FormControlLabel
                        label="Vadodara"
                        control={<Checkbox checked={region.vadodara}
                        onChange={handleRegionChnage('vadodara')}
                        />}
                       
                       />
                    </div>
                    <div className='flex items-center' >
                    <FormControlLabel
                        label="Surat"
                        control={<Checkbox checked={region.suart}
                        onChange={handleRegionChnage('suart')}
                        />}
                       
                       />
                    </div>
                    <div className='flex items-center' >
                    <FormControlLabel
                        label="Rajkot"
                        control={<Checkbox checked={region.rajkot}
                        onChange={handleRegionChnage('rajkot')}
                        />}
                       
                       />
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegionFilter
import Checkbox from '@mui/material/Checkbox';
import { useEffect, useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../../store/slice/filterSlice';

const DistributorFilter = () => {
    
    const dispatch=useDispatch()
    const[distributor,setDistributor]=useState({
        dist1:false,
        dist2:false,
        dist3:false,
        dist4:false
    })
    useEffect(()=>{
        console.log(distributor,"this is dist")
        const selectedDistributors = Object.keys(distributor).filter(key => distributor[key]);
        if(selectedDistributors.length==0){

        }
        else{
            dispatch(setFilter({
                distributor:selectedDistributors
            }))
        }
    },[distributor])



    const handleDistributorChnage=(name)=>(event)=>{
        setDistributor(prevState=>({
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
                        label="Distributor 1"
                        control={<Checkbox checked={distributor.dist1}
                        onChange={handleDistributorChnage('dist1')}
                        />}
                       
                       />
                    </div>
                    <div className='flex items-center' >
                    <FormControlLabel
                        label="Distributor 2"
                        control={<Checkbox checked={distributor.dist2}
                        onChange={handleDistributorChnage('dist2')}
                        />}
                       
                       />
                    </div>
                    <div className='flex items-center' >
                    <FormControlLabel
                        label="Distributor 3"
                        control={<Checkbox checked={distributor.dist3}
                        onChange={handleDistributorChnage('dist3')}
                        />}
                       
                       />
                    </div>
                    <div className='flex items-center' >
                    <FormControlLabel
                        label="Distributor 4"
                        control={<Checkbox checked={distributor.dist4}
                        onChange={handleDistributorChnage('dist4')}
                        />}
                       
                       />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DistributorFilter
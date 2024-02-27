import Checkbox from '@mui/material/Checkbox';
import { useEffect, useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../../store/slice/filterSlice';

const AssetFilter = () => {
    
    const dispatch=useDispatch()
    const[asset,setAsset]=useState({
        ebike:false,
        ecar:false,
        car:false,
        bike:false
    })
    useEffect(()=>{
        const selectedAssets = Object.keys(asset).filter(key => asset[key]);
        if(selectedAssets.length==0){

        }
        else{
            
            dispatch(setFilter({
                asset:selectedAssets
            }))
        }
    },[asset])



    const handleAssetChnage=(name)=>(event)=>{
        setAsset(prevState=>({
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
                        label="E-Car"
                        control={<Checkbox checked={asset.ecar}
                        onChange={handleAssetChnage("ecar")}
                        />}
                       
                       />
                    </div>
                    <div className='flex items-center' >
                    <FormControlLabel
                        label="E-Bike"
                        control={<Checkbox checked={asset.ebike}
                        onChange={handleAssetChnage("ebike")}
                        />}
                       
                       />
                    </div>
                    <div className='flex items-center' >
                    <FormControlLabel
                        label="Car"
                        control={<Checkbox checked={asset.car}
                        onChange={handleAssetChnage("car")}
                        />}
                       
                       />
                    </div>
                    <div className='flex items-center' >
                    <FormControlLabel
                        label="Bike"
                        control={<Checkbox checked={asset.bike}
                        onChange={handleAssetChnage('bike')}
                        />}
                       
                       />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AssetFilter
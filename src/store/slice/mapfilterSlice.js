import { createSlice } from "@reduxjs/toolkit";



export const mapfilterSlice=createSlice({
    name:"mapfilter",
    initialState:"activeUser",
    reducers:{
        setMapFilter:(state,action)=>{
            state=action.payload
            return state
        }
    }
})



export const {setMapFilter}=mapfilterSlice.actions
export default mapfilterSlice.reducer
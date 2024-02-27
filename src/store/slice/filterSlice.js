import { createSlice } from "@reduxjs/toolkit";



export const filterSlice=createSlice({
    name:"filter",
    initialState:{
     
        filter:{
            type:"none",
            date:{
                from:"",
                to:""
            },
            distributor:[],
            region:[],
            asset:[]
        }
    },
    reducers:{
        setFilter:(state,action)=>{
            console.log(action.payload,"this is action of redux store")
            console.log(action.type,"this is type of redux store reducers")

            
            state.filter = {
                ...state.filter,
                ...action.payload
            };
            console.log(state,"this is my state")
           
        }
    }
})



export const {setFilter}=filterSlice.actions
export default filterSlice.reducer
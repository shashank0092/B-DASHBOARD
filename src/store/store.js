import {configureStore} from "@reduxjs/toolkit"
import filterReducer from "./slice/filterSlice"
import mapfilterReducer from "./slice/mapfilterSlice"



export const store=configureStore({
   reducer:{
    filter:filterReducer,
    mapfilter:mapfilterReducer
   },
   devTools:true
})
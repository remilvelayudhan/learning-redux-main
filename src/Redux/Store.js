import {configureStore} from '@reduxjs/toolkit'
import colorReducer from "./ColorSlice/ColorSlice"
import countReducer from "./CountSlice/CountSlice"

export default configureStore({
    reducer:{
        color:colorReducer,
        count:countReducer
    }
})
import { createSlice } from "@reduxjs/toolkit";
import Navbar from "../Navbar/Navbar";



const counterSlice = createSlice({
    name: Navbar,
    initialState: {
        count : 0
    },
    reducers: {
        increment: (state)=>{
            state.count += 1
        },
        decrement: (state)=>{
            state.count -= 1
        }
    }
})

export default counterSlice.reducer
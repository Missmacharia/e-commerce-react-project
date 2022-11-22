import { createSlice } from "@reduxjs/toolkit";
import Navbar from "../Navbar/Navbar";



const counterSlice = createSlice({
    name: Navbar,
    initialState: {
        count : 0
    },
    reducers: {
        AddCartAction: (state)=>{
            state.count += 1
        },
        DecreaseCartAction: (state)=>{
            state.count -= 1
        }
    }
})

export const {AddCartAction, DecreaseCartAction} = counterSlice.actions

export default counterSlice.reducer
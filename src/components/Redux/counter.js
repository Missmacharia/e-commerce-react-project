const { createSlice } = require("@reduxjs/toolkit")



const intialState ={
    count: 0
}

const counterSlice = createSlice({
    name: "counter", 
    intialState,
    reducers:{
        addCartIncreament: (state, action)=>{
            state.count = action.payload;
            if(addCartIncreament) {
                return{...state, count:state.count+1}
            }
        }
    }
})

export const {addCartIncreament} = counterSlice.actions;

export default counterSlice.reducer
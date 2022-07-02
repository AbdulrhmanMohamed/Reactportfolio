import { createSlice } from "@reduxjs/toolkit";

const initialState={
    counter:0,
}
const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state,action)=>{
            state+=1;
            console.log('action',action)
        },
        decrement:(state)=>{
            state-=1;
        }
    }
    

})

export const {increment,decrement}=counterSlice.actions;
export default counterSlice.reducer;
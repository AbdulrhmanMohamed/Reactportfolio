import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


const initialState={
    products:[],
    isLoading:false,
}



const apiUrl='https://fakestoreapi.com/products';
export const  fetchProducts=createAsyncThunk('shop/getProducts',()=>{
   return  fetch(apiUrl)
    .then(res=>res.json())
    .then(json=>json)
})
const shopSlice=createSlice({
    name:'shop',
    initialState,
    reducers:{
        addProduct:()=>
        {console.log('products si Added')}
    },
    extraReducers:{
        [fetchProducts.pending]:(state)=>{
            console.log('pending')
            state.isLoading=true;
        },
        [fetchProducts.fulfilled]:(state,action)=>{
            state.isLoading=false;
            console.log('fulfilled')
            state.products=action.payload;
        },
        [fetchProducts.rejected]:(state,action)=>{
            console.log('rejected');
        }
    }
})

export default shopSlice.reducer;
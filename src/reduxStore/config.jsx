import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counter.slice'
import shopSlice from './features/shop.slice'
import todoSlice from './features/todo.slice'
export const store=configureStore(
   { 
    reducer:{
        todo:todoSlice,
        shopSlice,
    }
    }
)
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import providerReducer from './slices/providerSlice'
import productReducer from './slices/productSlice'
import receiptReducer from './slices/receiptSlice'



export const store = configureStore({
    reducer: {
        providers: providerReducer,
        products:productReducer,
        receipts:receiptReducer
       
      
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()
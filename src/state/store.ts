import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import providerReducer from './slices/providerSlice'
import productReducer from './slices/productSlice'
import receiptReducer from './slices/receiptSlice'
import billReducer from './slices/billSlice'
import authReducer from "./slices/authSlice";
import shopping from './slices/shoppingCartSlice'



export const store = configureStore({
    reducer: {
        auth:authReducer,
        providers: providerReducer,
        products:productReducer,
        receipts:receiptReducer,
        bill:billReducer,
        shopping:shopping

        
       
      
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()
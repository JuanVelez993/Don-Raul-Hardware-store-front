import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import providerReducer from '../state/providerSlice'



export const store = configureStore({
    reducer: {
        providers: providerReducer
       
      
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()
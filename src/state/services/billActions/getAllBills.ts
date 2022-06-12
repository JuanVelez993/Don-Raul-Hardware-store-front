import { createAsyncThunk } from "@reduxjs/toolkit";
import { billType } from '../../slices/billSlice'
import { billUrls } from '../apiData/billUrls';


export const getAllBills = createAsyncThunk('getAllBills', async () => {
    const response = await fetch(billUrls.GetAllBills)
    return (await response.json() as billType[])
})
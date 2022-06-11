import { createAsyncThunk } from "@reduxjs/toolkit";
import { receiptType } from "../../slices/receiptSlice";
import { receiptUrls } from './receiptUrls';

export const getAllReceipts = createAsyncThunk('getAllReceipts', async () => {
    const response = await fetch(receiptUrls.GetAllReceipts)
    return (await response.json() as receiptType[])
})
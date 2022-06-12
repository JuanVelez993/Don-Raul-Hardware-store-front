import { createAsyncThunk } from "@reduxjs/toolkit";
import { receiptType } from "../../slices/receiptSlice";
import { receiptUrls } from '../apiData/receiptUrls';



export const saveReceipt = createAsyncThunk('saveReceipt', async (receipt: receiptType) => {
    const response = await fetch(receiptUrls.SaveReceipt, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(receipt),
    })
    return (await response.json()) as receiptType;
})
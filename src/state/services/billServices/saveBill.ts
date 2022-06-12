import { createAsyncThunk } from "@reduxjs/toolkit";
import { billType } from "../../slices/billSlice";
import { billUrls } from "./billUrls";


export const saveBill = createAsyncThunk('saveBill', async (product: billType) => {
    const response = await fetch(billUrls.SaveBill, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(product),
    })
    return (await response.json()) as billType;
})
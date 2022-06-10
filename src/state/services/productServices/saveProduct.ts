import { createAsyncThunk } from "@reduxjs/toolkit";
import { productType } from "../../productSlice";
import { productUrls } from './productUrls';



export const saveProduct = createAsyncThunk('saveProduct', async (product: productType) => {
    const response = await fetch(productUrls.SaveProduct, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(product),
    })
    return (await response.json()) as productType;
})
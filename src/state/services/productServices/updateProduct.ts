import { createAsyncThunk } from "@reduxjs/toolkit";
import { productType } from "../../slices/productSlice";
import { productUrls } from './productUrls';



export const updateProduct = createAsyncThunk('updateProduct', async (product: productType) => {
    const response = await fetch(productUrls.UpdateProduct, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(product),
    })
    return (await response.json()) as productType;
})
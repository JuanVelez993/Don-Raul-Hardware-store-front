import { createAsyncThunk } from "@reduxjs/toolkit";
import { productType } from "../../slices/productSlice";
import { productUrls } from "./productUrls";

export const getAllProducts = createAsyncThunk('getAllProducts', async () => {
    const response = await fetch(productUrls.GetAllProduct)
    return (await response.json() as productType[])
})
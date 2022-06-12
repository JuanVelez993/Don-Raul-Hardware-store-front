import { createAsyncThunk } from "@reduxjs/toolkit";
import { providerType } from "../../slices/providerSlice";
import { providerUrls } from "../apiData/providerUrls";

export const getAllProviders = createAsyncThunk('getAllProviders', async () => {
    const response = await fetch(providerUrls.GetAll)
    console.log(response);
    return (await response.json() as providerType[])
})
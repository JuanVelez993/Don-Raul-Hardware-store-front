import { createAsyncThunk } from "@reduxjs/toolkit";
import { providerType } from "../../slices/providerSlice";
import { providerUrls } from "../apiData/providerUrls";

export const saveProvider = createAsyncThunk('provider/save', async (provider:providerType) => {
    const response = await fetch(providerUrls.SaveProvider, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(provider),
    })
    return (await response.json()) as providerType
})
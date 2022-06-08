import { createAsyncThunk } from "@reduxjs/toolkit";
import { providerType } from "../../providerSlice";
import { providerUrls } from "./providerUrls";

export const saveProvider = createAsyncThunk('posts/create', async (provider:providerType) => {
    const response = await fetch(providerUrls.SaveProvider, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(provider),
    })
    return (await response.json()) as providerType
})
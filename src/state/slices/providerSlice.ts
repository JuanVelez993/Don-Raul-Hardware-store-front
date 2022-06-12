import { createSlice } from "@reduxjs/toolkit";
import { RootState } from '../store'
import { getAllProviders } from '../services/providerActions/getAllProviders'
import { saveProvider } from "../services/providerActions/saveProvider";


export enum requestStatus {
    IDLE = 'idle',
    COMPLETED = 'completed',
    FAILED = 'failed',
    PENDING = 'pending',
}

type providerType = {
    id: string,
    name: string,
    identification: string,
    phone: string,
}

interface providerStateType {
    providers: providerType[],
    status: requestStatus,
    error: string | null,
}


const initialState: providerStateType = {
    providers: [],
    status: requestStatus.IDLE,
    error: null,
}

const providerSlice = createSlice({
    name: 'provider',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        //getAllProviders
        builder.addCase(getAllProviders.pending, (state, action) => {
            state.status = requestStatus.PENDING
        })
        builder.addCase(getAllProviders.fulfilled, (state, action) => {
            state.status = requestStatus.COMPLETED
            state.providers = action.payload
        })
        builder.addCase(getAllProviders.rejected, (state, action) => {
            state.status = requestStatus.FAILED
            state.error = "Something went wrong while fetching the providers"
            state.providers = []
        })
        //saveProvider
        builder.addCase(saveProvider.pending, (state) => {
            state.status = requestStatus.PENDING
        })
        builder.addCase(saveProvider.fulfilled, (state, action) => {
            state.status = requestStatus.COMPLETED
            state.providers.push(action.payload)
        })
        builder.addCase(saveProvider.rejected, (state) => {
            state.status = requestStatus.FAILED
            state.error = 'Something went wrong while creating the provider'
        })
    }
})

export type { providerType }
export type { providerStateType }
export default providerSlice.reducer
export const selectProvidersState = () => (state: RootState) => state.providers.providers
export const selectProvidersStatus = () => (state: RootState) => state.providers.status
export const selectProvidersFetchError = () => (state: RootState) => state.providers.error
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from '../state/store'
import { getAllProviders } from './services/providerServices/getAllProviders'


export enum posibleStatus {
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
    status: posibleStatus,
    error: string | null,
}


const initialState: providerStateType = {
    providers: [],
    status: posibleStatus.IDLE,
    error: null,
}

const providerSlice = createSlice({
    name: 'provider',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getAllProviders.pending, (state, action) => {
            state.status = posibleStatus.PENDING
        })
        builder.addCase(getAllProviders.fulfilled, (state, action) => {
            state.status = posibleStatus.COMPLETED
            state.providers = action.payload
        })
        builder.addCase(getAllProviders.rejected, (state, action) => {
            state.status = posibleStatus.FAILED
            state.error = "Something went wrong while fetching the providers"
            state.providers = []
        })
    }
})

export type { providerType }
export type { providerStateType }
export default providerSlice.reducer
export const selectProvidersState = () => (state: RootState) => state.providers.providers
export const selectProvidersStatus = () => (state: RootState) => state.providers.status
export const selectProvidersFetchError = () => (state: RootState) => state.providers.error
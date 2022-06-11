import { createSlice } from "@reduxjs/toolkit";
import { RootState } from '../state/store'
import { providerType } from "./providerSlice";
import { getAllReceipts } from "./services/receiptServices/getAllReceipts";
import { saveReceipt } from "./services/receiptServices/saveReceipt";


export enum requestStatus {
    IDLE = 'idle',
    COMPLETED = 'completed',
    FAILED = 'failed',
    PENDING = 'pending',
}

type receiptType = {
    id: string,
    date: string,
    description: string,
    units: number,
    productId:string,
    provider:providerType
}

interface receiptStateType {
    receipts: receiptType[],
    status: requestStatus,
    error: string | null,
}


const initialState: receiptStateType = {
    receipts: [],
    status: requestStatus.IDLE,
    error: null,
}

const receiptSlice = createSlice({
    name: 'receipt',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        //getAllReceipts
        builder.addCase(getAllReceipts.pending, (state, action) => {
            state.status = requestStatus.PENDING
        })
        builder.addCase(getAllReceipts.fulfilled, (state, action) => {
            state.status = requestStatus.COMPLETED
            state.receipts = action.payload
        })
        builder.addCase(getAllReceipts.rejected, (state, action) => {
            state.status = requestStatus.FAILED
            state.error = "Something went wrong while fetching the receipts"
            state.receipts = []
        })
        //saveReceipt
        builder.addCase(saveReceipt.pending, (state) => {
            state.status = requestStatus.PENDING
        })
        builder.addCase(saveReceipt.fulfilled, (state, action) => {
            state.status = requestStatus.COMPLETED
            state.receipts.push(action.payload)
        })
        builder.addCase(saveReceipt.rejected, (state) => {
            state.status = requestStatus.FAILED
            state.error = 'Something went wrong while creating the receipt'
        })
        
    }
})

export type { receiptType }
export type { receiptStateType }
export default receiptSlice.reducer
export const selectReceiptsState = () => (state: RootState) => state.receipts.receipts
export const selectReceiptsStatus = () => (state: RootState) => state.receipts.status
export const selectReceiptsFetchError = () => (state: RootState) => state.receipts.error
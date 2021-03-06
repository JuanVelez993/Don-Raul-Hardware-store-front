import { createSlice } from "@reduxjs/toolkit";
import { RootState } from '../../state/store'
import {  requestStatus } from './providerSlice'
import { getAllBills } from '../services/billActions/getAllBills'
import { productType } from "./productSlice";
import { saveBill } from "../services/billActions/saveBill";


type billType = {
    id: string,
    date: string,
    client: string,
    clerk: string,
    products: productType[],
    total: number,
}

interface billStateType {
    bills: billType[]
    status: requestStatus,
    error: string | null
}

const initialState: billStateType = {
    bills: [],
    status: requestStatus.IDLE,
    error: null
}

const billSlice = createSlice({
    name: 'bill',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        //getAllBills
        builder.addCase(getAllBills.pending, (state, action) => {
            state.status = requestStatus.PENDING
        })
        builder.addCase(getAllBills.fulfilled, (state, action) => {
            state.status = requestStatus.COMPLETED
            state.bills = action.payload
        })
        builder.addCase(getAllBills.rejected, (state, action) => {
            state.status = requestStatus.FAILED
            state.error = "Something went wrong while fetching the bills"
            state.bills = []
        })
        //saveBill
        builder.addCase(saveBill.pending, (state) => {
            state.status = requestStatus.PENDING
        })
        builder.addCase(saveBill.fulfilled, (state, action) => {
            state.status = requestStatus.COMPLETED
            state.bills.push(action.payload)
        })
        builder.addCase(saveBill.rejected, (state) => {
            state.status = requestStatus.FAILED
            state.error = 'Something went wrong while creating the bill'
        })
    }
})

export type { billType }
export type { billStateType }
export default billSlice.reducer
export const selectBillsState = () => (state: RootState) => state.bill.bills
export const selectBillsStatus = () => (state: RootState) => state.bill.status
export const selectBillsFetchError = () => (state: RootState) => state.bill.error
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from './store'
import { getAllProducts } from './services/productServices/getAllProducts'
import { providerType } from "./providerSlice";



export enum requestStatus {
    IDLE = 'idle',
    COMPLETED = 'completed',
    FAILED = 'failed',
    PENDING = 'pending',
}

type productType = {
    id: string,
    description: string,
    currentInventory: number,
    minInventory: number,
    maxInventory: number,
    price: number,
    provider: providerType
}

interface productStateType {
    products: productType[],
    status: requestStatus,
    error: string | null
}

const initialState: productStateType = {
    products: [],
    status: requestStatus.IDLE,
    error: null,
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        //GetAllProducts
        builder.addCase(getAllProducts.pending, (state, action) => {
            state.status = requestStatus.PENDING
        })
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.status = requestStatus.COMPLETED
            state.products = action.payload
        })
        builder.addCase(getAllProducts.rejected, (state, action) => {
            state.status = requestStatus.FAILED
            state.error = "Something went wrong while fetching the products"
            state.products = []
        })
        

    }
})


export type { productType }
export type { productStateType }
export default productSlice.reducer
export const selectProductsState = () => (state: RootState) => state.products.products
export const selectProductsStatus = () => (state: RootState) => state.products.status
export const selectProductsFetchError = () => (state: RootState) => state.products.error
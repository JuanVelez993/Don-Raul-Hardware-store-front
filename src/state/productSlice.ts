import { createSlice } from "@reduxjs/toolkit";
import { RootState } from './store'
import { getAllProducts } from './services/productServices/getAllProducts'
import { providerType } from "./providerSlice";
import { saveProduct } from './services/productServices/saveProduct';
import { deleteProduct } from "./services/productServices/deleteProduct";
import { updateProduct } from "./services/productServices/updateProduct";



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
        //saveProduct
        builder.addCase(saveProduct.pending, (state) => {
            state.status = requestStatus.PENDING
        })
        builder.addCase(saveProduct.fulfilled, (state, action) => {
            state.status = requestStatus.COMPLETED
            state.products.push(action.payload)
        })
        builder.addCase(saveProduct.rejected, (state) => {
            state.status = requestStatus.FAILED
            state.error = 'Something went wrong while creating the product'
        })
        //deleteProduct
        builder.addCase(deleteProduct.pending, (state) => {
            state.status = requestStatus.PENDING
        })
        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            state.status = requestStatus.COMPLETED
            if (action.payload.deleted) {
                state.products = state.products.filter((product) => product.id !== action.payload.productId)
            }
        })
        builder.addCase(deleteProduct.rejected, (state) => {
            state.status = requestStatus.FAILED
            state.error = "Something went wrong while deleting the product"
        })
        //updateProduct
        builder.addCase(updateProduct.pending, (state) => {
            state.status = requestStatus.PENDING
        })
        builder.addCase(updateProduct.fulfilled, (state, action) => {
            state.status = requestStatus.COMPLETED
            let updatedProduct = state.products.filter(product => product.id=== action.payload.id)[0];
            let updatedProductPosition = state.products.indexOf(updatedProduct);
            state.products[updatedProductPosition] = action.payload;
            
        })
        builder.addCase(updateProduct.rejected, (state) => {
            state.status = requestStatus.FAILED
            state.error = 'Something went wrong while updating the product'
        })
        

    }
})


export type { productType }
export type { productStateType }
export default productSlice.reducer
export const selectProductsState = () => (state: RootState) => state.products.products
export const selectProductsStatus = () => (state: RootState) => state.products.status
export const selectProductsFetchError = () => (state: RootState) => state.products.error
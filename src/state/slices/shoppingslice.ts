import { createSlice } from "@reduxjs/toolkit"
import { shoppingCartType } from "./productSlice"


interface shoppingStateType {
    products: shoppingCartType[],
    //products: productType[],
    
}

const initialState: shoppingStateType = {
    products: [],
    
}

const shoppingSlice = createSlice({
    name: 'shopping',
    initialState,
    reducers: {
        addProduct(state, action){
        
            const existingProduct = state.products.find(actualProduct => actualProduct.product.id === action.payload.id)

            if (existingProduct){
                const updatedProduct = { quantity: (existingProduct.quantity + 1), product: existingProduct.product } 
                state.products = state.products.filter(p => p.product.id !== existingProduct.product.id)   
                state.products.push(updatedProduct)
            }else{
                const newProduct = {
                    quantity: 1,
                    product: action.payload
                }    
                state.products.push(newProduct)
            }
        },
        clearShoppingCart(state){
            state.products =[]
        }
    },})


export default shoppingSlice.reducer
export const {addProduct,clearShoppingCart} = shoppingSlice.actions
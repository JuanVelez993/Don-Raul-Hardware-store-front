import { createSlice } from "@reduxjs/toolkit"
import { productType } from "./productSlice"
export const ADD_PRODUCT='ADD_PRODUCT'


interface shoppingStateType {
    products: productType[],
    
}

const initialState: shoppingStateType = {
    products: [],
    
}


export const addProduct= (product: productType) => (dispatch:any) =>{
    
      dispatch({
        type:ADD_PRODUCT,
        payload:{product:product}
    })
}
export const shopping=(state= initialState,action:any)=>{
    switch(action.type){
        case ADD_PRODUCT:
            
            return {
                ...state,
                products:[
                    ...state.products,
                    action.payload.product]
            }
    }
}

const shoppingSlice = createSlice({
    name: 'shopping',
    initialState,
    reducers: {
        addPost(state, action){
            state.products.push(action.payload)
        },
        getShoppingCart(state){
             state.products
        },
        clearShoppingCart(state){
            state.products =[]
        }
    },})


export default shoppingSlice.reducer
export const {addPost,getShoppingCart} = shoppingSlice.actions
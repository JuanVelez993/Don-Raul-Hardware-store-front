import { createAsyncThunk } from "@reduxjs/toolkit";
import { productType } from '../../slices/productSlice'
import { productUrls } from "./productUrls";


export const deleteProduct = createAsyncThunk('deleteProduct', async (product: productType) => {
    const response = await fetch(`${productUrls.DeleteProduct}/${product.id}`, {
        method: 'DELETE'
    })

    return { deleted: response.ok, productId: product.id }
})
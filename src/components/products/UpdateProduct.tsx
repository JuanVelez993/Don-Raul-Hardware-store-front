import { Button } from '@mantine/core';
import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import '../../App.css'
import { productType, selectProductsState } from '../../state/productSlice';
import { providerType} from '../../state/providerSlice';
import { updateProduct } from '../../state/services/productServices/updateProduct';
import { useAppDispatch } from '../../state/store';
import { useLocation } from "react-router-dom"


interface CustomizedState {
    myState: string
}



const UpdateProduct: React.FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const state = location.state as CustomizedState;
    const { myState } = state;
    const getProducts = useSelector(selectProductsState())
    const toUpdate = getProducts.find((options) => options.id === myState) as productType
    const [id, setId]= useState(toUpdate.id)
    const [description, setDescription] = useState(toUpdate.description);
    const [currentInventory, setCurrentInventory] = useState(toUpdate.currentInventory);
    const [minInventory, setMinInventory] = useState(toUpdate.minInventory);
    const [maxInventory, setMaxInventory] = useState(toUpdate.maxInventory);
    const [price, setPrice] = useState(toUpdate.price);
    const [provider, setProvider] = useState(toUpdate.provider as providerType)

    
    
     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (description && currentInventory && minInventory && maxInventory && price && provider) {
            const updatedProduct: productType = {
                id: id, description: description, currentInventory: currentInventory, minInventory: minInventory, maxInventory: maxInventory,
                price: price, provider: provider
            }
            dispatch(updateProduct(updatedProduct))
           

        }


    }
    return (
        <form onSubmit={(e) => handleSubmit(e)} >
            <h1>{description}</h1>
            <div >
                <label >Minimum Units</label>
                <div >
                    <input type='number' name="minInventory" id="minInventory" placeholder="Minimum Units" value={minInventory} onChange={(e) => setMinInventory(Number(e.target.value))} />
                </div>
            </div>
            <div >
                <label >Maximum Units</label>
                <div >
                    <input type='number' name="maxInventory" id="maxInventory" placeholder="Maximum Units" value={maxInventory} onChange={(e) => setMaxInventory(Number(e.target.value))} />
                </div>
            </div>
            <div >
                <label >Price</label>
                <div >
                    <input type='number' name="price" id="price" placeholder="Price" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
                </div>
            </div>
            <div >
            </div>
            <div>
                <Button type='submit'>
                    Update Product
                </Button>
            </div>
        </form>
    )
}


export default UpdateProduct
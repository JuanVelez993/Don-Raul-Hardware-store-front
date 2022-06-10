import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import '../../App.css'
import { productType } from '../../state/productSlice';
import { providerType, selectProvidersState } from '../../state/providerSlice';
import { saveProduct } from '../../state/services/productServices/saveProduct';
import { useAppDispatch } from '../../state/store';
import { TextInput, Button, NumberInput, Group, Box, Select } from '@mantine/core';
import { useForm } from '@mantine/form';




function ProductForm() {
    const [description, setDescription] = useState("");
    const [currentInventory, setCurrentInventory] = useState(0);
    const [minInventory, setMinInventory] = useState(0);
    const [maxInventory, setMaxInventory] = useState(0);
    const [price, setPrice] = useState(0);
    const [provider, setProvider] = useState({} as providerType) 

    const dispatch = useAppDispatch();
    const getProviders = useSelector(selectProvidersState())
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = getProviders.find((options) => options.id === event.target.value)
        if (value) return setProvider(value)
        return {}
        
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if ( description && currentInventory && minInventory && maxInventory && price && provider) {
            const newProduct: productType = {
                id: nanoid(), description: description, currentInventory:currentInventory, minInventory:minInventory, maxInventory:maxInventory,
                price: price, provider: provider
            }
            dispatch(saveProduct(newProduct))
            setDescription("")
            setCurrentInventory(0)
            setMinInventory(0)
            setMaxInventory(0)
            setPrice(0)
            
        }

        
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)} >
            <div >
                <label >Description</label>
                <div >
                    <input type="text" name="description" id="description" placeholder="Description"  value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
            </div>
            <div >
                <label >Current Units</label>
                <div >
                    <input type='number' name="currentInventory" id="currentInventory" placeholder="Current Units" value={currentInventory} onChange={(e) => setCurrentInventory(Number(e.target.value))} />
                </div>
            </div>
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
                <label >Select a provider:</label>
                <select onChange={e => handleSelectChange(e)}>
                    {getProviders.map((provider) => (
                        <option  key={provider.id} value={provider.id}>{provider.name}</option>
                    ))}
                </select>
             </div>
            <div>
                <Button type='submit'>
                    Add Product
                </Button>
            </div>
        </form>
    )
}


export default ProductForm
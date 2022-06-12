import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import '../../App.css'
import { productType, selectProductsState } from '../../state/slices/productSlice';
import { providerType, selectProvidersState } from '../../state/slices/providerSlice';
import { useAppDispatch } from '../../state/store';
import { Button,Alert} from '@mantine/core';
import { AlertCircle } from 'tabler-icons-react';
import { saveReceipt } from '../../state/services/receiptServices/saveReceipt';
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';
import { receiptType } from '../../state/slices/receiptSlice';
import { updateProduct } from '../../state/services/productServices/updateProduct';

interface CustomizedState {
    myState: string
}



function ReceiptForm() {
    const getProducts = useSelector(selectProductsState())
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const state = location.state as CustomizedState
    const { myState } = state
    const productPurchased = getProducts.find((product) => product.id === myState) as productType
    const [description, setDescription] = useState(productPurchased.description)
    const [id, setId] = useState(productPurchased.id)
    const [units, setUnits] = useState(0)
    const [provider, setProvider] = useState(productPurchased.provider as providerType)


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (description && units && (units > 0) &&
            (units <= (productPurchased.maxInventory - productPurchased.currentInventory))) {

            let saveDate = moment(new Date()).format("DD/MM/YYYY HH:mm:ss")
            const savedReceipt: receiptType = {
                id: nanoid(),
                date: saveDate,
                description: description,
                units: units,
                productId: id,
                provider: provider,
            }
            const updatedStock = productPurchased.currentInventory + units

            const productUnitsUpdated: productType = {
                id: id,
                description: description,
                currentInventory: updatedStock,
                minInventory: productPurchased.minInventory,
                maxInventory: productPurchased.maxInventory,
                price: productPurchased.price,
                provider:provider,
            }

            dispatch(saveReceipt(savedReceipt))
            dispatch(updateProduct(productUnitsUpdated))

            navigate("/receipts")

        } else {
            const unitsToLimit = productPurchased.maxInventory - productPurchased.minInventory
            alert("You can't buy more than " + unitsToLimit+" units!!")
            
        }
    }
        
    return (
        <form onSubmit={(e) => handleSubmit(e)} >
            <div >
                <label >Product:</label>
                <div >
                    {description}
                </div>
            </div>
            <br />
            <div >
                <label >Units:</label>
                <div >
                    <input type='number' name="units" id="units" min='0' value={units} onChange={(e) => setUnits(Number(e.target.value))} />
                </div>
            </div>
            <br />
            <div >
                <label >Min Inventory:</label>
                <div >
                    {productPurchased.minInventory}
                </div>
            </div>
            <br />
            <div >
                <label >Max Inventory:</label>
                <div >
                    {productPurchased.maxInventory}
                </div>
            </div>
            <br />
            <div >
                <label >Provider:</label>
                <div >
                    {provider.name}
                </div>
            </div>
            <br/>
            <div>
                <Button type='submit'>
                    Generate Receipt
                </Button>
            </div>
        </form>
        
    )
}


export default ReceiptForm
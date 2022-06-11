import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import '../../App.css'
import { providerType } from '../../state/slices/providerSlice';
import { saveProvider } from '../../state/services/providerServices/saveProvider';
import { useAppDispatch } from '../../state/store';
import { Button } from '@mantine/core';




function ProviderForm() {
    const [name, setName] = useState("");
    const [identification, setIdentification] = useState("");
    const [phone, setPhone] = useState("");

    const dispatch = useAppDispatch();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (name && identification && phone) {
            const newProvider: providerType = { id:nanoid(),name,identification,phone };
            dispatch(saveProvider(newProvider))
            setName('')
            setIdentification('')
            setPhone('')
        }
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div >
                <label >Name</label>
                <div >
                    <input type="text" name="name" id="name" placeholder="Name"  value={name} onChange={(e) => setName(e.target.value)} />
                </div>
            </div>
            <div >
                <label >Identification</label>
                <div >
                    <input type="text" name="identification" id="identification" placeholder="Identification" value={identification} onChange={(e) => setIdentification(e.target.value)} />
                </div>
            </div>
            <div >
                <label >Phone</label>
                <div >
                    <input name="phone" id="phone" placeholder="Phone"  value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
            </div>
            <div>
                <Button type='submit' >
                    Add Provider
                </Button>
            </div>
        </form>
    )
}

export default ProviderForm
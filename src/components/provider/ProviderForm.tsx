import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import '../../App.css'
import { providerType } from '../../state/providerSlice';
import { saveProvider } from '../../state/services/providerServices/saveProvider';
import { useAppDispatch } from '../../state/store';




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
            <div className="form-group row">
                <label className="col-sm-1 col-form-label">Name</label>
                <div className="col-sm-10">
                    <input type="text" name="name" id="name" placeholder="Name" className="form-control mb-4" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-1 col-form-label">Identification</label>
                <div className="col-sm-10">
                    <input type="text" name="identification" id="identification" placeholder="Identification" className="form-control mb-4" value={identification} onChange={(e) => setIdentification(e.target.value)} />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-1 col-form-label">Phone</label>
                <div className="col-sm-10">
                    <input name="phone" id="phone" placeholder="Phone" className="form-control mb-4" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
            </div>
            <div>
                <button type='submit' className="btn btn-success mb-4">
                    Add Provider
                </button>
            </div>
        </form>
    )
}

export default ProviderForm
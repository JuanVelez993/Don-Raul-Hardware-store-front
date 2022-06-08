import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import '../../App.css'




function ProviderForm() {
    const [name, setNameInput] = useState("");
    const [identification, setIdentification] = useState("");
    const [phone, setPhone] = useState("");

    const dispatch = useDispatch();
    return (
        <form action="">
            <div className="form-group row">
                <label className="col-sm-1 col-form-label">Name</label>
                <div className="col-sm-10">
                    <input type="text" name="name" id="name" placeholder="Name" className="form-control mb-4" value={name} onChange={(e) => setNameInput(e.target.value)} />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-1 col-form-label">Identification</label>
                <div className="col-sm-10">
                    <input type="text" name="identification" id="identification" placeholder="Identification" className="form-control mb-4" value={identification} onChange={(e) => setIdentification(e.target.value)} />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-1 col-form-label">Description</label>
                <div className="col-sm-10">
                    <textarea name="phone" id="phone" placeholder="Phone" className="form-control mb-4" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
            </div>
            <div>
                <button type="button" className="btn btn-success mb-4">
                    Add to Providers
                </button>
            </div>
        </form>
    )
}

export default ProviderForm
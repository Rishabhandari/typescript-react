import React, { BaseSyntheticEvent, HTMLAttributes, useState } from 'react'
import ContactList from './ContactList';

export default function AddContacts() {

    const [contactDetails, setContactDetails] = useState([]); //question :  how to define interface here ? dif btw array of obj vs string of obj
    const [name, setName] = useState('');
    const [number, setNumber] = useState(0);

    const handleSubmit = (e: BaseSyntheticEvent) => {
        e.preventDefault();
        setContactDetails([
            ...contactDetails,
            {
                id: Date.now(),
                name: name,
                number: number
            }
        ])
        setName('');
        setNumber(0);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label >Contact Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"
                        value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label >Contact Number</label>
                    <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Contact Number"
                        value={number} onChange={(e) => setNumber(parseInt(e.target.value))}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>

                <ContactList contacts={contactDetails} />
            </form>

        </div>
    )
}

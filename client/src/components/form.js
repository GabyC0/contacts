import { useState } from "react";
import { Navbar } from "./Navbar";


//Add contact form
const Form = (props) => {
    const [contacts, setContacts] = useState({
        firstname: "",
        lastname: "",
        mobile: "",
        email: "",
        address: "",
        note: ""
    });

    //create functions that handle the event of the user typing into the form
    const handleNameChange = (event) => {
        const firstname = event.target.value;
        setContacts((contacts) => ({ ...contacts, firstname }));

    }

    const handleLastnameChange = (event) => {
        const lastname = event.target.value;
        setContacts((contacts) => ({ ...contacts, lastname }));

    }

    const handleMobileChange = (event) => {
        const mobile = event.target.value;
        setContacts((contacts) => ({ ...contacts, mobile }));

    }

    const handleEmailChange = (event) => {
        const email = event.target.value;
        setContacts((contacts) => ({ ...contacts, email }));
    }

    const handleAddressChange = (event) => {
        const address = event.target.value;
        setContacts((contacts) => ({ ...contacts, address }));

    }

    const handleNoteChange = (event) => {
        const note = event.target.value;
        setContacts((contacts) => ({ ...contacts, note }));

    }

    //A function to handle the post request
    const postContacts = async (newContacts) => {
        const response = await fetch('http://localhost:5001/api/contacts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newContacts)
        });
        const data = await response.json();
        console.log("From the post ", data);
        // props.addContacts(data);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postContacts(contacts);
        props.addContacts(contacts);
    };

    return (
        <div>
            <Navbar />
        
       <h2 className="h2-center">Add new Contact</h2> 
        <div className="center">
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label>First Name</label>
                <input
                    type="text"
                    id="add-contact-name"
                    placeholder="First Name"
                    required
                    value={contacts.firstname}
                    onChange={handleNameChange}

                />
                <br/>
                <label>Last Name</label>
                <input
                    type="text"
                    id="add-contact-lastname"
                    placeholder="Last Name"
                    value={contacts.lastname}
                    onChange={handleLastnameChange}
                />
                <br/>
                <label>Mobile</label>
                <input
                    type="tel"
                    id="add-contact-mobile"
                    placeholder="Mobile Number"
                    required
                    value={contacts.mobile}
                    onChange={handleMobileChange}
                />
                <br/>
                <label>Email</label>
                <input
                    type="email"
                    id="add-contact-email"
                    placeholder="Email"
                    value={contacts.email}
                    onChange={handleEmailChange}
                />
                <br/>
                <label>Address</label>
                <input
                    type="text"
                    id="add-contact-address"
                    placeholder="Address"
                    value={contacts.address}
                    onChange={handleAddressChange}
                />
                <br/>
                <label>Note</label>
                <input
                    type="text"
                    id="add-contact-note"
                    placeholder="Note"
                    value={contacts.note}
                    onChange={handleNoteChange}
                />
            </fieldset>
            <button type="submit">Add</button>
        </form>
        </div>
        </div>
    );
};

export default Form;
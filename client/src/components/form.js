import { useState } from "react";

const Form = (props) => {
    const [contacts, setContacts] = useState({
        firstname: "",
        lastname: "",
        mobile: ""
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

    //A function to handle the post request
    const postContacts = async (newContacts) => {
        const response = await fetch('http://localhost:5001/api/contacts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newContacts)
        });
        const data = await response.json();
        console.log("From the post ", data);
        props.addContacts(data);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postContacts(contacts);
        
    };

    return (
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
                    required
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
            </fieldset>
            <button type="submit">Add</button>
        </form>
    );
};

export default Form;
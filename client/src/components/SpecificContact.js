import React from 'react';
import { Navbar } from './Navbar';
//import { Delete } from './Delete';
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const SpecificContact = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5001/api/contacts`)
        .then((response) => response.json())
        .then(contacts =>{
            setContacts(contacts); 
        })
        
    }, []);

    let params = useParams();

  return (
    <div>
      <Navbar/>
        <h2>Contact Information: {params.contactId}</h2>
        <div>
            <h3 key={contacts.id}>{contacts.firstname} {contacts.lastname}</h3>
            <Link to='/edit'><button>Edit</button></Link>
            <Link to="/specific"><button>Delete</button></Link>
        </div>
        
    </div>
  )
}

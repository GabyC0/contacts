import React from 'react';
import { Navbar } from './Navbar';
//import { Delete } from './Delete';
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

export const SpecificContact = (props) => {
    const [contacts, setContacts] = useState([]);

  return (
    <div>
      <Navbar/>
        <h2>Contact Information</h2>
        <div>
            <h3 key={contacts.id}>{contacts.firstname} {contacts.lastname}</h3>
            <Link to='/edit'><button>Edit</button></Link>
            <Link to="/specific"><button>Delete</button></Link>
        </div>
    </div>
  )
}

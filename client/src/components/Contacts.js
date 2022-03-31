import { useState, useEffect } from "react";
//import Form from "./Form";
//import { Link } from 'react-router-dom'
import { Link, Outlet } from "react-router-dom";

function Contacts() {

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5001/api/contacts")
        .then((response) => response.json())
        .then(contacts =>{
         setContacts(contacts);   
        })
        
    }, []);

    

    

    // const addContacts = (newContacts) => {
    //     setContacts((contacts) => [...contacts, newContacts]);
    // }


    return (
      <div className="contacts">
        <h2> Contact List </h2>
        <div className="center">
        <ul>
        {contacts.map(contact => 
            <Link to={`/contacts/${contact.id}`}><li key={contact.id}>{contact.firstname} {contact.lastname}</li></Link>
            )}
        {/* <Form addContacts={addContacts} /> */}
        </ul>
        </div>
        <Outlet/>
      </div>
    );
  }
  
  export default Contacts;
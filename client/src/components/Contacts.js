import { useState, useEffect } from "react";
import Form from "./Form";

function Contacts() {

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5001/api/contacts")
        .then((response) => response.json())
        .then(contacts =>{
            //setStudents((students[3]));
            //console.log("Testing", typeof students);
            for (let index in contacts){
               if( index !== "3"){
                   setContacts(contacts);
               }
            };       
        })
        
    }, []);

    

    const addContacts = (newContacts) => {
        //console.log(newStudent);
        //postStudent(newStudent);
        setContacts((contacts) => [...contacts, newContacts]);
    }


    return (
      <div className="contacts">
        <h2> Contact List </h2>
        <ul>
            {contacts.map(contact =>
                <li key={contact.id}><a href="#">{contact.firstname} {contact.lastname}</a></li>)}
        </ul>
        <Form addContacts={addContacts} />
      </div>
    );
  }
  
  export default Contacts;
const express = require('express');
const cors = require('cors');
require('dotenv').config()
const db = require('../server/db/db-connection.js'); 

const app = express();

const PORT = 5001;
app.use(cors());
app.use(express.json());

//creates an endpoint for the route /api
app.get('/', (req, res) => {
    res.json({ message: 'Hello from My ExpressJS' });
});

//create the get request
app.get('/api/contacts', cors(), async (req, res) => {
    // const contacts = [

    //     { id: 1, firstName: 'Lisa', lastName: 'Lee' },
    //     { id: 2, firstName: 'Eileen', lastName: 'Long' },
    //     { id: 3, firstName: 'Fariba', lastName: 'Dako' },
    //     { id: 4, firstName: 'Cristina', lastName: 'Rodriguez' },
    //     { id: 5, firstName: 'Andrea', lastName: 'Trejo' },
    // ];
    // res.json(contacts);
    try{
        const { rows: contacts } = await db.query('SELECT * FROM contacts');
        res.send(contacts);
    } catch (e){
        return res.status(400).json({e});
    }
});

//create the POST request
app.post('/api/contacts/add', cors(), async (req, res) => {
    const newContact = { firstname: req.body.firstname, lastname: req.body.lastname, mobile: req.body.mobile, email: req.body.email, address: req.body.address, note: req.body.note }
    console.log([newContact.firstname, newContact.lastname]);
    const result = await db.query(
        'INSERT INTO contacts(firstname, lastname, mobile, email, address, note) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',
        [newContact.firstname, newContact.lastname, newContact.mobile, newContact.email, newContact.address, newContact.note]
    );
    console.log(result.rows[0]);
    res.json(result.rows[0]);
});

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});


const express = require('express');
const router = express.Router();

const db = require('../db/contacts.js');

router.get('/', (req, res) => {
    db.getAllContacts(0)
    .then(contacts => {
      res.json(contacts)
    }) 
})

module.exports = router
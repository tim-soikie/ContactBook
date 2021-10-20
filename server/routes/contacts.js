const express = require('express');
const router = express.Router();

const db = require('../db/contacts.js');

const userID = 0

router.get('/', (req, res) => {
    db.getAllContacts(userID)
    .then(contacts => {
      res.json(contacts)
    }) 
})

router.get('/:id', (req, res) => {
  db.getSingleContact(userID, req.params.id)
  .then(contact => {
    res.json(contact)
  }) 
})

router.post('/addContact', (req, res) => {
  db.addContact(userID, req.body)
  .then(() => {
    res.json(null)
  })
})

router.get('/removeContact/:id', (req, res) => {
  db.removeContact(userID, req.params.id)
  .then(() => {
    res.json(null)
  }) 
})

router.patch('/editContact/:id', (req, res) => {
  db.editContact(userID, req.body, req.params.id)
  .then(() => {
    res.json(null)
  })
})

module.exports = router
const express = require('express');
const router = express.Router();
const users = require('../db/queries/users');
module.exports = (db) => {

  router.get('/', function(req, res) {
    // ** for dev purposes only **
    // display user database and currently logged in user
    users.getAllUsers().then(data => {
      console.log('users: ', data);
      res.json({users: data});
    })
  });

  router.post('/login', function(req, res) {
    // validate info and set a cookie
  })

  router.post('/logout', function(req, res) {
    // clear a cookie (and redirect home?)
  })

  router.post('/register', function(req, res) {
    // validate info and insert into database (and login?)
  })

  return router;
}
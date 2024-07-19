const express = require('express')
const app = express()

app.get('/users', function (req, res) {
    let response = { message : "Welcome to users microservice..." }
    res.send({data: response})
  })
  
  app.post('/users' , function (req, res, ) { 
    const response = [
      { name: "Juan Perez", role: "Guest" },
      { name: "Simona Filomene", role: "Admin" }
    ];
    res.status(200).send({data: response});
      
  });

module.exports = app;
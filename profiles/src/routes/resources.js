const express = require('express')
const app = express()

app.get('/profiles', function (req, res) {
    let response = { message : "Welcome to profiles microservice..." }
    res.send({data: response})
  })
  
  app.post('/profiles' , function (req, res, ) { 
      const response = [ { name : "Admin", role :1  } , { name : "Guest", role : 2  } ];
      res.status(200).send({data: response}) ;
      
  });

module.exports = app;
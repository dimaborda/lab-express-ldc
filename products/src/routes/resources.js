const express = require('express')
const app = express()

app.get('/products', function (req, res) {
    let response = { message : "Welcome to products microservice" }
    res.send({data: response})
  })
  
  app.post('/products' , function (req, res, ) { 
    const response = [
      { name: "Camisa Tipo Jugador", price: 100 },
      { name: "Tenis", price: 200 }
  ];
  res.status(200).send({data: response});
      
  });

module.exports = app;
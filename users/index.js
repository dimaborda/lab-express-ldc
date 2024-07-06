const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true })) //
app.use(express.json({ limit: '16mb' })) // for 

app.get('/users', function (req, res) {
  let response = { message : "Welcome to users microservice" }
  res.send({data: response})
})

app.post('/users' , function (req, res, ) { 
    const response = [ { name : "pepe", lastName : "gomez"  } , { name : "juan", lastName : "perez"  } ];
    res.status(200).send({data: response}) ;
    
});

app.listen(3000)

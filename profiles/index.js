const express = require('express')
const app = express()
const routes = require('./src/routes/resources.js');

app.use(express.urlencoded({ extended: true })) //
app.use(express.json({ limit: '16mb' })) // for 

app.use('/', routes);

app.listen(3000)

import express from 'express';
import routes from './src/routes/resources.js';  
import resources_routes from './src/routes/resources.js';
const app = express()


app.use(express.urlencoded({ extended: true })) //
app.use(express.json({ limit: '16mb' })) // for 
app.use('/profiles/resources/', resources_routes);

export default app;

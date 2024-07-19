import express from 'express';
import profile_controller from '../controllers/profile_controller.js';
import auth_middleware from '../middleware/auth.js';
const app = express()

app.use(auth_middleware.validateAuth)

app.route('/profiles/:id')
    .get(profile_controller.findOne)
    .put(profile_controller.update)
    .delete(profile_controller.delete);

app.route('/profiles')
    .get(profile_controller.findAll)
    .post(profile_controller.create)
    
    

export default  app;
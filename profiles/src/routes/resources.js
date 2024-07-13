import express from 'express';
import profile_controller from '../controllers/profile_controller.js';
const app = express()

app.route('/profiles')
    .get(profile_controller.findAll)
    .post(profile_controller.create)
    .put(profile_controller.update)
    .delete(profile_controller.delete);

export default  app;
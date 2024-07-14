import express from 'express';
import user_controller from '../controllers/user_controller.js';
const app = express()

app.route('/users')
    .get(user_controller.findAll)
    .post(user_controller.create)
    .put(user_controller.update)
    .delete(user_controller.delete);

export default app;
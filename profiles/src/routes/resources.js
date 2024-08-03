import express from 'express';
import profile_controller from '../controllers/profile_controller.js';
import token_controller from '../controllers/token_controller.js';
const app = express()

app.route('/profiles')
    .get(profile_controller.findAll)
    .post(profile_controller.create)
    .put(profile_controller.update)
    .delete(profile_controller.delete);

app.route('/account')
    .post(token_controller.AccountAlgorand)
    .get(token_controller.recoverAccount)
app.route('/send-payment')
    .post(token_controller.sendPayment);

export default  app;
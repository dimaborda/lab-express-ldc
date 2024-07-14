import express from 'express';
import transaction_controller from '../controllers/transaction_controller.js';
const app = express()

app.route('/transaction')
    .get(transaction_controller.findAll)
    .post(transaction_controller.create)
    .put(transaction_controller.update)
    .delete(transaction_controller.delete);

export default app;
import express from 'express';
import {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
} from '../controllers/products_controller.js';

const app = express();

app.route('/products')
    .post(createProduct)
    .get(getProducts);

app.route('/products/:id')
    .get(getProductById)
    .put(updateProduct)
    .delete(deleteProduct);

export default app;

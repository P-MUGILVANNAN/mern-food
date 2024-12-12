// import express from 'express';
// import authMiddleware from '../middleware/Auth.js';

// import {placeOrder} from '../controller/OrderController.js';

// const orderRouter = express.Router();

// orderRouter.post('/place', authMiddleware, placeOrder);

// export default orderRouter;
import express from 'express';
import authMiddleware from '../middleware/Auth.js';

import { placeOrder, getOrders } from '../controller/OrderController.js';

const orderRouter = express.Router();

// Route to place an order
orderRouter.post('/place', authMiddleware, placeOrder);

// Route to get all orders (with authentication)
orderRouter.get('/list', authMiddleware, getOrders);

export default orderRouter;

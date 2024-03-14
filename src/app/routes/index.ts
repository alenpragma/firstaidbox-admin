import express from 'express';
import { ordersRoutes } from '../module/orders/orders.route';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/orders',
    routes: ordersRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;

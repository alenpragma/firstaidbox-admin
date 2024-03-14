"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const orders_route_1 = require("../module/orders/orders.route");
const router = express_1.default.Router();
const moduleRoutes = [
    // ... routes
    {
        path: '/orders',
        routes: orders_route_1.ordersRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.routes));
exports.default = router;

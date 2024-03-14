"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orders = void 0;
const mongoose_1 = require("mongoose");
const OrdersSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: [true, 'firstName is required'],
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required'],
    },
    phone: {
        type: String,
        required: [true, 'phone is required'],
    },
    postOffice: {
        type: String,
        required: [true, 'postOffice is required'],
    },
    policy: {
        type: String,
        required: [true, 'policy is required'],
    },
    email: {
        type: String,
        required: [true, 'Email: is required'],
    },
    quantity: {
        type: String,
        required: [true, 'Quantity is required'],
    },
    zipCode: {
        type: String,
        required: [true, 'Post code is required'],
    },
    distric: {
        type: String,
        required: [true, 'distric is required'],
    },
    info: {
        type: String,
        required: [true, 'info is required'],
    },
    price: {
        type: String,
        required: [true, 'price is required'],
    },
    status: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});
exports.Orders = (0, mongoose_1.model)('firstAidOrders', OrdersSchema);

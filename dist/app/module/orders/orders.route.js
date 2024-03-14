"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersRoutes = void 0;
const express_1 = __importDefault(require("express"));
const orders_Controller_1 = require("./orders.Controller");
const router = express_1.default.Router();
router.post('/', orders_Controller_1.controller.create);
router.get('/:id', orders_Controller_1.controller.getDataById);
router.patch('/:id', orders_Controller_1.controller.updateDataById);
router.delete('/:id', orders_Controller_1.controller.deleteData);
router.get('/', orders_Controller_1.controller.getAlldata);
exports.ordersRoutes = router;

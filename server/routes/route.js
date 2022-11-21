import express from 'express'
import { addPaymentGateway } from '../controllers/payment-controller.js';
import { getProductById, getProducts } from '../controllers/product-controller.js';
import { userLogin, userSignup } from '../controllers/user-controller.js';

const router = express.Router();

router.post("/signup",userSignup)
router.post("/login",userLogin)
router.get("/products",getProducts)
router.get("/product/:id",getProductById)
router.post("/payment",addPaymentGateway)

export default router
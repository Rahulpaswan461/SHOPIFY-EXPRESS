import express from "express"
import { userSignup ,userLogin} from "../controllers/userControllers.js"
import { getProduct } from "../controllers/productController.js"
import {getProductDetailsById} from '../controllers/productController.js'
import { addPaymentGateway,paytmResponse } from "../controllers/payment-controller.js"

const router = express.Router()

router.post("/signup",userSignup)
router.post("/login",userLogin)
router.get("/product",getProduct)

router.get("/product/:id",getProductDetailsById)
router.post("/payment",addPaymentGateway)

router.post('/callback',paytmResponse)

export default router
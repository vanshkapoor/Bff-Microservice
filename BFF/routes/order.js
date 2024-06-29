const express = require("express");
const orderSvc = require("../services/orderSvc");
const productSvc = require("../services/productSvc");
const router = express.Router()

router.get("/", async ( req, res ) => {
    const products = await orderSvc.getAll()
    res.json({ data: products });
})

router.get("/:id", async ( req, res ) => {
    const products = await orderSvc.findOne(req.params.id);
    res.json({ data: products });
})

router.post("/", async ( req, res ) => {
    const { ProductId, UserId, Quantity, Cost } = req.body;

    let product = null;
    try {
        product = await productSvc.findOne(ProductId);
        if(product.data == null)
        {
            throw new Error("Product doesn't exist");
        }
        if(product.data.ProductQuantity < Quantity)
        {
            throw new Error("Product not available");
        }
    } catch(error){
        res.status(400).send({message: error.message});
    }

    let newOrder = null;
    try{
        newOrder = await orderSvc.createOrder(ProductId, UserId, Quantity, Cost);
        await productSvc.updateQuantity(ProductId, product.data.ProductQuantity - Quantity);
        res.json({ data: newOrder });
    } catch(error){
        if(error && error.message == "Product quantity update failed")
        {
            await orderSvc.deleteOrder(newOrder.data.id); // we revert our order created as quantity update failed
        }
        res.status(400).send({message: "Unable to place order"});
    }
})

module.exports = router;
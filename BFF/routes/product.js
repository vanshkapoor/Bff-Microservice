const express = require("express");
const productSvc = require("../services/productSvc");
const router = express.Router()

router.get("/", async ( req, res ) => {
    const products = await productSvc.getAll()
    res.json({ data: products });
})

router.get("/:id", async ( req, res ) => {
    const products = await productSvc.findOne(req.params.id);
    res.json({ data: products });
})

router.post("/", async ( req, res ) => {
    const { ProductName, ProductQuantity } = req.body;
    try {
        const newProduct = await productSvc.createProduct(ProductName, ProductQuantity);
        res.json({ data: newProduct });
    } catch(error){
        console.log("error", error);
        res.send(400);
    }
})

module.exports = router;
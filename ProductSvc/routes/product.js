const express = require('express');
const { Products } = require("../model");

const router = express.Router();

router.get("/", async ( req, res ) => {
    const products = await Products.findAll();
    res.json({ data: products });
})

router.get("/:id", async ( req, res ) => {
    const products = await Products.findByPk(req.params.id);
    res.json({ data: products });
})

router.post("/", async ( req, res ) => {
    const { ProductName, ProductQuantity } = req.body;
    try {
        const newProduct = await Products.create({ ProductName, ProductQuantity });
        res.json({ data: newProduct });
    } catch(error){
        console.log("error", error);
        res.send(400);
    }
})

router.post("/:id/quantity", async ( req, res ) => {
    const { ProductQuantity } = req.body;
    const id = req.params.id;

    try {
       await Products.update(
            { ProductQuantity },
            {
                where: {
                    id
                }
            }
        )
        res.sendStatus(201);
    } catch(error){
        res.sendStatus(400);
    }
})

module.exports = router;

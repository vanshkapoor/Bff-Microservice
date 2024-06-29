const express = require("express");
const { Orders } = require("../model");

const router = express.Router()


router.get("/", async ( req, res ) => {
    const AllOrders = await Orders.findAll();
    res.json({ data: AllOrders });
})

router.get("/:id", async ( req, res ) => {
    const Order = await Orders.findByPk(req.params.id);
    res.json({ data: Order });
})

router.post("/", async ( req, res ) => {
    const { ProductId, UserId, Quantity, Cost } = req.body;
    try {
        const newOrder = await Orders.create({ ProductId, UserId, Quantity, Cost });
        res.json({ data: newOrder });
    } catch(error){
        console.log("error", error);
        res.send(400);
    }
})

router.delete("/:id", async ( req, res ) => {
    const { id } = req.params;
    try {
        await Orders.destroy({
            where: {
                id
            }
        });
        res.sendStatus(204);
    } catch(error){
        console.log("error", error);
        res.send(400);
    }
})

module.exports = router;
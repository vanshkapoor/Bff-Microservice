const express = require('express');

const router = express.Router();

router.get("/", (req, res) => {
    res.json({message: "User Service Response"})
})

module.exports = router;

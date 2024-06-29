const express = require("express")
const bodyParser = require('body-parser');
const product = require("./routes/product");
const order = require("./routes/order");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const version = '/api/v1'
app.use(`${version}/products`, product);
app.use(`${version}/orders`, order);


const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log(`BFF Server is running at ${PORT}`);
})
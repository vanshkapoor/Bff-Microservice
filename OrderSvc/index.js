const express = require("express")
const bodyParser = require('body-parser');
const order = require("./routes/order");
const db = require('./db/config');

const app = express();
const authenticate = async () => {
  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
authenticate();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const version = '/api/v1'
app.use(`${version}/orders`, order);


const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Order Server is running at ${PORT}`);
})
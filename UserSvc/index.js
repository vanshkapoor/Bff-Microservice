const express = require("express")
const bodyParser = require('body-parser');
const user = require("./routes/user");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const version = '/api/v1'
app.use(`${version}/user`, user);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running!!');
})
const express = require('express')
const AuthController = require('./Controllers/AuthController')

const app = express();
bodyParser = require('body-parser')

const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use('/auth',AuthController)


app.listen(port,() => {
    console.log("Listening to port 3000")
})

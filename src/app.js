const express = require('express')
const AuthController = require('./Controllers/AuthController')

const app = express();
const router = express.Router()
const port = 3000;

router.post('/auth',AuthController.authenicate)


app.listen(port,() => {
    console.log("Listening to port 3000")
})

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended : true }));
router.use(bodyParser.json())

var AuthenticationService = require('../Services/AuthenticationService')



router.post('/', function(req,res){
    console.log(req.body)
    AuthenticationService.checkAuthentication({
        username: req.body.username,
        password: req.body.password},
    function(status,keys,payload){
        res.status(status).send({ [keys] : payload })
    })
})
router.get('/',function(req,res){
    console.log(req.headers)
    res.status(200).send("test")
})

module.exports = router;
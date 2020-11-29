var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var AuthenticationService = require('../Services/AuthenticationService')
router.use(bodyParser.urlencoded({ extended : true }));
router.use(bodyParser.json())


router.post('/', function(req,res){
    AuthenticationService.checkAuthentication({
        username: req.body.username,
        password: req.body.password},
    function(response){
        // We might make this slightly more complex once we figure out
        // How to do this in a better fashion
        res.status(response.status).send(response(body))
    })
})
router.get('/',function(req,res){
    res.status(200).send("test")
})

module.exports = router;
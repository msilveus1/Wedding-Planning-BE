var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var AuthenticationService = require('../Services/AuthenticationService')
router.use(bodyParser.urlencoded({ extended : true }));
router.use(bodyParser.json())


router.post('/', function(req,res){
    AuthenticationService.authentication(req,function(response){
        
    })
})
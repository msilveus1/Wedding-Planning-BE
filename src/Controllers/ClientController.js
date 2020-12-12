var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended : true }));
router.use(bodyParser.json())
 
var AuthenticationService = require('../Services/AuthenticationService')
var ClientInfoService = require('../Services/ClientInfoService')

router.post('/',function(req,res){
    if (!req.headers.authorization) {
        return res.status(403).json({ error: 'No credentials sent!' });
    }else if(!AuthenticationService.verifyToken(req.headers.authorization)){
        return res.status(403).json({ error: 'Invalid Token' })
    }

    
})
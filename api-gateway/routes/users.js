/*
===================================
; Title: users
; Author: Professor Krasso
; Date: 
; Modified By: Rochelle Markham
; Description: API Gateway
;==================================
*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

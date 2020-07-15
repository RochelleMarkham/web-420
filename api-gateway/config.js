/*
===================================
; Title: config
; Author: Professor Krasso
; Date: 
; Modified By: Rochelle Markham
; Description: API Gateway
;==================================
*/

var config = {};
config.web = {};
config.web.port = process.env.PORT||'3000';
module.exports = config;

config.web.secret = 'topsecret';
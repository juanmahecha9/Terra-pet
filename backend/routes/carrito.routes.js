const express = require('express');
const carritoControl = require('../controller/carritocontroler')
const api = express.Router();
api.get('/carrito', (req, res) => { res.send("carrito bitch"); })


api.post('/agregaranimal', carritoControl.createData);

module.exports =
  api;

const express = require('express');
const carritoControl = require('../controller/carritocontroler')
const api = express.Router();



api.post('/agregaranimal', carritoControl.createData);
api.get('/carrito',carritoControl.getData);
api.delete('/asessinar/:id',carritoControl.matarAnimal);
api.purge('/aniquilar',carritoControl.aniquilarAnimales)
module.exports =
  api;

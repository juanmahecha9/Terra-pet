const express= require(express);
const api=express.Router();
const carritoControl=require('../controller/carritocontroler')
router.get('/carrito',(req,res)=>{console.log("carrito bitch");})
module.exports=api;

api.post('/',carritoControl.crearAnimal);

module.exports={
    crearAnimal
}
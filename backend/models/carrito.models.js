const mongoose= require ('mongoose')
const carritoSchema=mongoose.Schema;

const carrito = new carritoSchema(
  {
    name: String,
    descripcion:  String,
    region: String,
      
    }

  
);

module.exports = mongoose.model("carrito",carrito)
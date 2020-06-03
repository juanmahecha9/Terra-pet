const mongoose= require ('mongoose')
const carritoSchema=mongoose.Schema;

const carrito = carritoSchema(
  {
    name: {
      type: String,
      
    },
    descripcion: {
      type: String,
      
      
    },
    region: {
      type: String,
      
    },
  },
  
);

module.exports = mongoose.model("carrito",carrito)
const Carrito = require('../models/carrito.models')

const createData = async (req, res) => {
    // CREAR
    const { name, descripcion, region } = req.body; //parametros que el envian solicitudes
    const carrito = new Carrito({ name, descripcion, region }); // Acceder al modelo de mongoDB y se guarda en un avariable para acceder a cada key del objeto


    carrito.save((err, animalNuevo) => {
        if (err) {
            res.status(500).send({ message: "error en el servidor bitch" });
        } else
            if (!animalNuevo) {
                res.status(200).send({ message: "no fue posible realizar el registro" });
            } else {
                res.status(200).send({
                    status: 'Producto  nuevo',
                    animal: animalNuevo
                });
            }
    })
}
 function getData(req, res){
    animal.find((err, animalesEncontrados) => {
        if (err) {
            res.status(500).send({message:"error en el servidor"});
        }else{
            if(!animalesEncontrados){
                res.status(200).send({message:"no fue posible actualizar bitch"});
            }else {res.status(200).send({
                status: 'animales Encontrados',
                producto: animalesEncontrados
            
            });
        }
    }
    })
}
module.exports = { createData, getData }
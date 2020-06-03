animal.save((err,animalNuevo)=>{
    if(err){
        res.status(500).send({message:"error en el servidor bitch"});
    }else 
    if(!animalNuevo){
        res.status(200).send({message:"no fue posible realizar el registro"});
    }else{
        res.status(200).send({
            status:'Producto  nuevo',
            animal:animalNuevo
        });
    }
})
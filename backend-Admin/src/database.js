const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://apifotos:apifotos@cluster0-djdsi.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));
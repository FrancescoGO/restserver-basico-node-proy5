
require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');

// Using Node.js `require()`
const mongoose = require('mongoose');

const app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

// Configuración global de rutas
app.use( require('./routes/index') );

mongoose.connect(process.env.URLDB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
    .then(resp => console.log('Mongoose Conectado'))
    .catch(err => console.log('Error en conectar a Mongoose', err));

app.listen(process.env.PORT, () => {
    console.log('Escuchando el puerto', 3000);
});
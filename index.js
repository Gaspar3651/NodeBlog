const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');

// View engine
app.set('viewngine', 'ejs');

// Statics
app.use(express.static('public'));

// Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Data Base
connection.authenticate().then(() => {
    console.log('Connection success!!');
}).catch((error) => {
    console.log('ERROR: '+ error);
});

app.get('/', (req, res) => {
    res.render('index.ejs');
});




app.listen(1313, () => {
    console.log('O Servidor está rodando!!!');
});
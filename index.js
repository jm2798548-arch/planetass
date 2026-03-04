// Inicializando el FrameWork de express
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'views/pages')));

app.set('view engine', 'ejs');

app.get('/sistema-solar', (req, res) => {
    // localhost:4000
    res.render('pages/planetas');
})

app.get('/mercurio', (req, res) => {
    res.render('pages/mercurio');
})

app.get('/venus', (req, res) => {
    res.render('pages/venus')
})

app.get('/tierra', (req, res) => {
    res.render('pages/tierra')
})

app.get('/marte', (req, res) => {
    res.render('pages/marte')
})

app.get('/jupiter', (req, res) => {
    res.render('pages/jupiter')
})

app.get('/saturno', (req, res) => {
    res.render('pages/saturno')
})

app.get('/urano', (req, res) => {
    res.render('pages/urano')
})

app.get('/neptuno', (req, res) => {
    res.render('pages/neptuno')
})

const server = app.listen(4000, function() {
    console.log("Servidor corriendo en el puerto 4000");
    console.log("Hola Mundo")
});
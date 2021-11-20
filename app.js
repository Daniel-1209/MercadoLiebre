
let express = require('express');

let app = express();

let port = 3030;

let path = require('path');

// cuando usamos el public podemos crear una carpeta que se llama static y ahi se guardan las 
// imagenes y por ello tenemos que ponerle en html la ruta /static al inicio de imagen
app.use(express.static(path.resolve(__dirname, './public')));

app.listen(port, () => {
    console.log( 'Server Runing');  
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/home.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/register.html'));
});
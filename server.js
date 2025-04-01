const express = require("express")
const path = require("path")
const app = express();
const port = 3001;

// RUTA
app.get('/',(req, res) =>{
    res.send('HELLO WORDL')
})
app.get('/ejemplo2ruta',(req, res) =>{
    res.send('HELLO WORDL TWO')
})




// ARCHIVO JSON SEPARADO POR SECCION
app.get('/api/presentacionjson',(req, res) =>{
    res.sendFile(path.join(__dirname,"Public", "presentacion.json"))
})
app.get('/api/habilidadesjson',(req, res) =>{
    res.sendFile(path.join(__dirname,"Public", "habilidades.json"))
})


app.get('/api/experiencia_laboraljson',(req, res) =>{
    res.sendFile(path.join(__dirname,"Public", "experiencia_laboral.json"))
})
app.get('/api/educacionjson',(req, res) =>{
    res.sendFile(path.join(__dirname,"Public", "educacion.json"))
})

app.get('/api/contactojson',(req, res) =>{
    res.sendFile(path.join(__dirname,"Public", "contacto.json"))
})

app.get('/api/proyectosjson',(req, res) =>{
    res.sendFile(path.join(__dirname,"Public", "proyectos.json"))
})

app.use(express.static ("Public"));
app.listen(port, ()=>{
    console.log("Server iniciando en el puerto"+ port);
}); 
const express = require("express");
const Contenedor = require("./db/controller/product")
const app = express();

const PORT = 8080;

const productos = [
    {
        title: "Celular",
        price: 424,
        thumbnail: "234"
    },
    {
        title: "Televisor",
        price: 874,
        thumbnail: "135"
    },
    {
        title: "impresora",
        price: 774,
        thumbnail: "635"
    }      
];

app.get("/productos",(req, res) => { 
   
   res.send(Contenedor.createTable())
    
 });
app.get("/productosInsert",(req, res) => { 
   
    res.send(Contenedor.insert(productos))
     
});   
 
const server = app.listen(PORT, () => {console.log(`Servidor http escuchando en el puerto ${PORT}`);});
 
 server.on("error", (error) => console.log(`Error en servidor ${error}`));


const express = require("express");
const app = express();
const { options } = require("./options/sqliteDB");
const knex = require("knex")(options);

const PORT = 8080;


class Contenedor {
    
    constructor(title, price, thumbnail){
        this.title = title
        this.price= price
        this.thumbnail= thumbnail
    }
    createTable() {
        knex.schema
            .createTable("productos", (table) => {
                table.increments("id");
                table.string("title");
                table.integer("price");
                table.integer("thumbnail");
            })
            .then(() => {
                console.log("Table cars created");
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                knex.destroy();
            });                  
        }
    insert(productos){        
        knex("productos")
            .insert(productos)
            .then(() => {
                console.log("productos insertados");
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                knex.destroy();
            });       
    }
    deleteById(Number){
        
    }
    getAllProducts(){
              
    }
    getRandomProducts(){
             
    }
    deleteAll(){
        
    }
}
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

const desafio = new Contenedor("desafio")

app.get("/productos",(req, res) => { 
   
   res.send(desafio.createTable())
    
 });
 app.get("/productosInsert",(req, res) => { 
   
    res.send(desafio.insert(productos))
     
});   
 
const server = app.listen(PORT, () => {console.log(`Servidor http escuchando en el puerto ${PORT}`);});
 
 server.on("error", (error) => console.log(`Error en servidor ${error}`));


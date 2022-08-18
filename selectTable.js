const express = require("express");
const app = express();

const { options } = require("./options/sqliteDB");
const knex = require("knex")(options);

app.get("/cars", (req, res) => {
  knex
    .from("cars")
    .select("*")//trae todos los registros de cars
    .orderBy("price", "desc") //sintaxis sql que permite ordenar en este caso por price y en descendente(desc)
    .then((rows) => {
      res.json(rows);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });// no hace falta en finaly ya que la comunicacion se corta o en el res.status(500) o en el res.json!!!
});

app.get("/cars/:id", (req, res) => {
    const { id } = req.params;// saco el ID por params del obejto request (req)
    knex
      .from("cars")
      .select("*")
      .where({ id })// con solo esta linea le indicamos que Id traer!!
      .then((row) => {
        res.json(row);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).end();
      });
  });

app.listen(8080)
const { options } = require("./options/sqliteDB");
const knex = require("knex")(options);

const cars = [
  { name: "Ferrari", price: 20, color: "amarillo"},
  { name: "Bugatti", price: 10, color: "rojo" },
  { name: "Porsche", price: 50, color: "amarillo" },
];

knex("cars")
  .insert(cars)
  .then(() => {
    console.log("Cars inserted");
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    knex.destroy();
  });
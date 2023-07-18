const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const PORT = 3001;
const { sequelize } = require("./db/mysql");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
const { getUsers, storeUser } = require("./comtrolers/users");
// __________________________________

app.get("/users", getUsers);
app.post("/users", storeUser);

app.listen(3001, () => {
  console.log("Listening on port 3001...");
});

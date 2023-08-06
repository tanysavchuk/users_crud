const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const PORT = 3001;
const multer = require("multer");
const { sequelize } = require("./db/mysql");
const { User } = require("./models/users");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const {
  getUsers,
  storeUser,
  editUser,
  getUserById,
  deleteUser,
} = require("./comtrolers/users");

// __________________________________

// const multerStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "public");
//   },
//   filename: (req, file, cb) => {
//     const ext = file.mimetype.split("/")[1];
//     cb(null, `files/admin-${file.fieldname}-${Date.now()}.${ext}`);
//   },
// });

// const upload = multer({ storage: storage });

// app.post("/upload", upload.single("file"), (req, res) => {
//   console.log("============================================");
//   console.log(req.files);
// });

app.get("/users", getUsers);
app.post("/users", storeUser);
app.delete("/users/:id", deleteUser);
app.get("/users/:id", getUserById);
app.put("/users/:id", editUser);

app.listen(3001, () => {
  console.log("Listening on port 3001...");
});

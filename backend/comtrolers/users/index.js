const { User } = require("../../models/users");

exports.getUsers = async (req, res, next) => {
  const users = await User.findAll();
  console.log(User);
  res.json(users);
};

exports.storeUser = async (req, res) => {
  const { firstName, lastName, email, avatar } = req.body;
  try {
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      avatar,
    });
    console.log("users create");
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "error" });
  }
};

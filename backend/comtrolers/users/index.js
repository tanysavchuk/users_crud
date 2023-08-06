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

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Deleting user with ID:", id);
    const user = await User.findOne({ where: { id } });

    if (!user) {
      console.log("User not found");
      return res.status(404).json({ error: "User not found" });
    }

    await user.destroy();
    console.log("User deleted successfully");
    return res.status(204).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    return res.status(500).json({ error: "Failed to delete user" });
  }
};
///////////////////////////
exports.editUser = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, avatar } = req.body;

  try {
    const user = await User.findOne({ where: { id } });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.avatar = avatar;

    await user.save();

    return res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).json({ error: "Failed to update user" });
  }
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({ where: { id } });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    return res.status(500).json({ error: "Failed to fetch user" });
  }
};

const express = require("express");
const router = express.Router();
const { users } = require("../models");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  const { username, password, email, first_name, last_name, role, status } =
    req.body;
  bcrypt.hash(password, 10).then((hash) => {
    users.create({
      username: username,
      password: hash,
      email: email,
      first_name: first_name,
      last_name: last_name,
      role: role,
      status: status,
    });
    res.json("SUCCESS");
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await users.findOne({ where: { username: username } });

  if (user) {
    bcrypt.compare(password, user.password).then((match) => {
      if (match) res.json("YOU LOGGED IN!!!");
      else res.json("Wrong Username And Password Combination");
    });
  } else {
    res.json("User Doesn't Exist");
  }
});

module.exports = router;

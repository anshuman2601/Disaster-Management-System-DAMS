const express = require("express");
const router = express.Router();
const { users } = require("../models");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  const { username, password, email, first_name, last_name, role, status } = req.body;
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

  if (!user) res.json({ error: "User Doesn't Exist" });

  bcrypt.compare(password, user.password).then((match) => {
    if (!match) res.json({ error: "Wrong Username And Password Combination" });

    res.json("YOU LOGGED IN!!!");
  });
});

module.exports = router;
const express = require("express");
const router = express.Router();
const { users } = require("../models");
const email_handler = require("../email");

const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  const { username, password, email, first_name, last_name, role, status } =
    req.body;
  bcrypt.hash(password, 10).then((hash) => {
    users.create({
      username: username,
      password: password,
      email: email,
      first_name: first_name,
      last_name: last_name,
      role: role,
      status: status,
    });
    console.log("test");
    email_handler.send_verification(email);
    console.log("email sent");
    res.json("SUCCESS");
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await users.findOne({ where: { username: username } });

  console.log(req.body);
  if (user) {
    bcrypt.compare(password, user.password).then((match) => {
      if (match) {
        res.json("YOU LOGGED IN!!!");
      } else {
        res.json("Wrong Username And Password Combination");
      }
    });
  } else {
    res.json("User Doesn't Exist");
  }
});

router.post("/verify", async (req, res) => {
  const { username, email, code } = req.body;
  if (email_handler.verify_code(email, code)) {
    users.update({ status: "verified" }, { where: { username: username } });
    res.json("valid code");
    return;
  }
  res.json("invalid code");
  return;
});

module.exports = router;

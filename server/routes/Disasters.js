// create express router for disasters

const express = require("express");
const router = express.Router();
const { disasters } = require("../models");

// get all disasters
router.get("/", async (req, res) => {
  const disaster = await disasters.findAll();
  res.json(disaster);
});

// get disaster by id (primary key)
router.get("/:id", async (req, res) => {
  const disaster = await disasters.findByPk(req.params.id);
  res.json(disaster);
});

// create disaster (post)
router.post("/", async (req, res) => {
  const { name, description, location, date, status } = req.body;
  const disaster = await disasters.create({
    name: name,
    description: description,
    location: location,
    date: date,
    status: status,
  });
  res.json(disaster);
});

// update disaster (put)
router.put("/:id", async (req, res) => {
  const { name, description, location, date, status } = req.body;
  const disaster = await disasters.update(
    {
      name: name,
      description: description,
      location: location,
      date: date,
      status: status,
    },
    { where: { id: req.params.id } }
  );
  res.json(disaster);
});

// delete disaster (delete)
router.delete("/:id", async (req, res) => {
  const disaster = await disasters.destroy({ where: { id: req.params.id } });
  res.json(disaster);
});

module.exports = router;

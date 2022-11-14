// create express router for disasters
const sequelize = require("sequelize");
const express = require("express");
const router = express.Router();
const { disasters } = require("../models");

// get active disasters
router.get("/", async (req, res) => {
  const disaster = await disasters.findAll({
    where: { disaster_status: "Active" },
  });
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
    { where: { disaster_id: req.params.id } }
  );
  res.json("SUCCESS");
});

// delete disaster (delete)
router.delete("/:id", async (req, res) => {
  const disaster = await disasters.destroy({
    where: { disaster_id: req.params.id },
  });
  res.json("DELETED");
});

router.post("/create", async (req, res) => {
  const { name, type, description, date, location } = req.body;
  largest_id = disasters.findAll({
    attributes: [sequelize.fn("MAX", sequelize.col("disaster_id"))],
  });
  console.log(largest_id);
  id = largest_id.disaster_id + 1;
  disasters.create({
    disaster_id: id,
    disaster_name: name,
    disaster_type: type,
    disaster_date: date,
    disaster_description: description,
    disaster_location: location,
    disaster_status: "Active",
  });
  res.json("SUCCESS");
});

module.exports = router;

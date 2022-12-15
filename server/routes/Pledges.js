// create express router for disaster pledges for pledges

const sequelize = require("sequelize");
const express = require("express");
const router = express.Router();
const { pledges } = require("../models");

// get all pledges (get)
router.get("/", async (req, res) => {
  const pledge = await pledges.findAll();
  res.json(pledge);
});

// get a users pledges
router.get("/users/:username", async (req, res) => {
  const pledge = await pledges.findAll({
    where: { pledge_username: req.params.username },
  } );
  res.json(pledge);
});

// get pledge by id (primary key)
router.get("/:id", async (req, res) => {
  const pledge = await pledges.findByPk(req.params.id);
  res.json(pledge);
});

// create pledge (post)
router.post("/create", async (req, res) => {
  const { location, item_id} = req.body;

  console.log(req.body);

  let largest_id = await pledges.findAll({
    attributes: [ sequelize.fn("MAX", sequelize.col("pledge_id")) ],
  });
  let id = largest_id.item_id + 1;

  const pledge = await pledges.create({
    pledge_id: id,
    pledge_username: "Zach",
    pledge_location: location,
    pledge_status: 'Open'
  });
  res.json("SUCCESS");
});


module.exports = router;

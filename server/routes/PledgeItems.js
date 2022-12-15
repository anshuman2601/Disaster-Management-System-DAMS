// create express router for items of a pledge

const express = require("express");
const router = express.Router();
const { pledge_items } = require("../models");

// get all pledges (get)
router.get("/", async (req, res) => {
  const pledge = await pledge_items.findAll();
  res.json(pledge);
});

// get items of a pledge by id
router.get("/:pledge_id", async (req, res) => {
  const pledge = await pledge_items.findall({
    where: { pledge_id: req.params.pledge_id },
  });
  res.json(pledge);
});

// create pledge (post)
router.post("/create", async (req, res) => {
  const { pldg_id, it_id, quant } = req.body;
  const pledge = await pledge_items.create({
    pledge_id: pldg_id,
    item_id: it_id,
    quantity: quant,
  });
  res.json("SUCCESS");
});

module.exports = router;

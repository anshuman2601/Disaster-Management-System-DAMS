// create express router for items
const sequelize = require("sequelize");
const express = require("express");
const router = express.Router();
const { items } = require("../models");

// get all items (get)
router.get("/", async (req, res) => {
  const item = await items.findAll();
  res.json(item);
});

// get item by id (primary key)
router.get("/:id", async (req, res) => {
  const item = await items.findByPk(req.params.id);
  res.json(item);
});

// create item (post)
router.post("/create", async (req, res) => {
  const { name, description } = req.body;
  let largest_id = await items.findAll({
    attributes: [sequelize.fn("MAX", sequelize.col("item_id"))],
  });
  let id = largest_id.item_id + 1;

  const item = await items.create({
    item_id: id,
    item_name: name,
    item_description: description,
  });
  res.json("SUCCESS");
});

// update item (put)
router.put("/:id", async (req, res) => {
  const { name, description, quantity, status, disaster_id } = req.body;
  const item = await items.update(
    {
      name: name,
      description: description,
      // quantity: quantity,
      // status: status,
      // item_id: disaster_id,
    },
    { where: { item_id: req.params.id } }
  );
  res.json(item);
});

// delete item (delete)
router.delete("/:id", async (req, res) => {
  const item = await items.destroy({ where: { item_id: req.params.id } });
  res.json(item);
});

module.exports = router;

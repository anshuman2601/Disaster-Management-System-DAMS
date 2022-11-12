// create express router for items

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
router.post("/", async (req, res) => {
  const { name, description, quantity, status, disaster_id } = req.body;
  const item = await items.create({
    name: name,
    description: description,
    quantity: quantity,
    status: status,
    disaster_id: disaster_id,
  });
  res.json(item);
});

// update item (put)
router.put("/:id", async (req, res) => {
  const { name, description, quantity, status, disaster_id } = req.body;
  const item = await items.update(
    {
      name: name,
      description: description,
      quantity: quantity,
      status: status,
      disaster_id: disaster_id,
    },
    { where: { id: req.params.id } }
  );
  res.json(item);
});

// delete item (delete)
router.delete("/:id", async (req, res) => {
  const item = await items.destroy({ where: { id: req.params.id } });
  res.json(item);
});

module.exports = router;

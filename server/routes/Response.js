// create express router for responses to requests for items
const sequelize = require("sequelize");
const express = require("express");
const router = express.Router();
const { responses } = require("../models");

// get all responses (get)
router.get("/", async (req, res) => {
  const response = await responses.findAll();
  res.json(response);
});

// get response by id (primary key)
router.get("/:id", async (req, res) => {
  const response = await responses.findByPk(req.params.id);
  res.json(response);
});

// create response (post) - this is where the user responds to a request for items
router.post("/create", async (req, res) => {
  const { name, description, quantity, status, disaster_id } = req.body;
  const response = await responses.create({
    name: name,
    description: description,
    quantity: quantity,
    status: status,
    disaster_id: disaster_id,
  });
  res.json(response);
});

// update response (put)
router.put("/:id", async (req, res) => {
  const { name, description, quantity, status, disaster_id } = req.body;
  const response = await responses.update(
    {
      name: name,
      description: description,
      quantity: quantity,
      status: status,
      disaster_id: disaster_id,
    },
    { where: { id: req.params.id } }
  );
  res.json(response);
});

// delete response (delete)
router.delete("/:id", async (req, res) => {
  const response = await responses.destroy({ where: { id: req.params.id } });
  res.json(response);
});

module.exports = router;

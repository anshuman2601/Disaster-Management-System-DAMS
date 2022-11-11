// create express router for disaster requests for items

const express = require("express");
const router = express.Router();
const { requests } = require("../models");

// get all requests (get)
router.get("/", async (req, res) => {
  const request = await requests.findAll();
  res.json(request);
});

// get request by id (primary key)
router.get("/:id", async (req, res) => {
  const request = await requests.findByPk(req.params.id);
  res.json(request);
});

// create request (post)
router.post("/", async (req, res) => {
  const { name, description, quantity, status, disaster_id } = req.body;
  const request = await requests.create({
    name: name,
    description: description,
    quantity: quantity,
    status: status,
    disaster_id: disaster_id,
  });
  res.json(request);
});

// update request (put)
router.put("/:id", async (req, res) => {
  const { name, description, quantity, status, disaster_id } = req.body;
  const request = await requests.update(
    {
      name: name,
      description: description,
      quantity: quantity,
      status: status,
      disaster_id: disaster_id,
    },
    { where: { id: req.params.id } }
  );
  res.json(request);
});

// delete request (delete)
router.delete("/:id", async (req, res) => {
  const request = await requests.destroy({ where: { id: req.params.id } });
  res.json(request);
});

module.exports = router;
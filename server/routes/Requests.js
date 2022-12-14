// create express router for disaster requests for requests

const sequelize = require("sequelize");
const express = require("express");
const router = express.Router();
const { requests } = require("../models");

// get all requests (get)
router.get("/", async (req, res) => {
  const request = await requests.findAll();
  res.json(request);
});

// get a users requests
router.get("/users/:username", async (req, res) => {
  const request = await requests.findAll({
    where: { request_username: req.params.username },
  });
  res.json(request);
});

// get request by id (primary key)
router.get("/:id", async (req, res) => {
  const request = await requests.findByPk(req.params.id);
  res.json(request);
});

// create request (post)
router.post("/create", async (req, res) => {
  const { disaster_id, expiration_date, item_name, quantity } = req.body;

  console.log(req.body);

  let largest_id = await requests.findAll({
    attributes: [sequelize.fn("MAX", sequelize.col("request_id"))],
  });
  let id = largest_id.item_id + 1;

  const request = await requests.create({
    request_id: id,
    request_username: "John",
    request_disaster_id: disaster_id,
    request_date: Date.now(),
    request_expiration: expiration_date,
    request_item: item_name,
    request_item_quant: quantity,
  });
  res.json("SUCCESS");
});

// update request (put)
// router.put("/:id", async (req, res) => {
//   const { name, description, quantity, status, request_id } = req.body;
//   const request = await requests.update(
//     {
//       name: name,
//       description: description,
//       quantity: quantity,
//       status: status,
//       request_id: request_id,
//     },
//     { where: { requset_id: req.params.id } }
//   );
//   res.json(request);
// });

router.delete("/:id", async (req, res) => {
  const request = await requests.destroy({
    where: { request_id: req.params.id },
  });
  res.json(request);
});

module.exports = router;

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
  } );
  res.json(request);
});

// get request by id (primary key)
router.get("/:id", async (req, res) => {
  const request = await requests.findByPk(req.params.id);
  res.json(request);
});

// create request (post)
router.post("/create", async (req, res) => {
  const { username, disaster_id, date, expiration } = req.body;
  let largest_id = await requests.findAll({
    attributes: [ sequelize.fn("MAX", sequelize.col("request_id")) ],
  });
  let id = largest_id.item_id + 1;
  const request = await requests.create({
    request_id: id,
    request_username: username,
    request_disaster_id: disaster_id,
    request_date: date,
    request_expiration: expiration
  });
  res.json(request);
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

// delete request (delete)
// router.delete("/:id", async (req, res) => {
//   const request = await requests.destroy({ where: { request_id: req.params.id } });
//   res.json(request);
// });

module.exports = router;
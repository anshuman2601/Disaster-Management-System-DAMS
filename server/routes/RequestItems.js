// create express router for items of a request

const express = require("express");
const router = express.Router();
const { request_items } = require("../models");

// get all requests (get)
router.get("/", async (req, res) => {
  const request = await request_items.findAll();
  res.json(request);
});

// get items of a request by id
router.get("/:req_id", async (req, res) => {
  const request = await request_items.findall({
    where: { request_id: req.params.req_id },
  });
  res.json(request);
});

// create request (post)
router.post("/create", async (req, res) => {
  const { rq_id, it_id, quant } = req.body;
  const request = await request_items.create({
    request_id: rq_id,
    item_id: it_id,
    quantity: quant,
  });
  res.json("SUCCESS");
});

// // update request (put)
// router.put("/:id", async (req, res) => {
//   const { name, description, quantity, status, request_id } = req.body;
//   const request = await request_items.update(
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

// // delete request (delete)
// router.delete("/:id", async (req, res) => {
//   const request = await requests.destroy({ where: { request_id: req.params.id } });
//   res.json(request);
// });

module.exports = router;

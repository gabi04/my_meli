const express = require("express");

const {
  getItemsByQuery,
  getItemDetail,
} = require("./../services/items.service");

const router = express.Router();

router.get("/", async (req, res) => {
  const { q: query } = req.query;
  const items = await getItemsByQuery(query);
  res.json(items);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const responseDescription = await getItemDetail(id);
  res.json(responseDescription);
});

module.exports = router;

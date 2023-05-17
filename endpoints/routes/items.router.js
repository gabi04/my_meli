const express = require("express");

const ItemsService = require("./../services/items.service");

const router = express.Router();
const service = new ItemsService();

router.get("/", async (req, res) => {
  const { q: query } = req.query;
  const items = await service.getByQuery(query);
  res.json(items);
});

module.exports = router;

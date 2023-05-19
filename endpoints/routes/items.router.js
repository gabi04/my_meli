const express = require("express");

const { getItems, getItemDetail } = require("./../services/items.service");

const router = express.Router();

router.get("/", async (req, res) => {
  const query = req.query.q;
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const items = await getItems(query);
  let itemsResponse = {
    ...items,
    items: items.items.slice(startIndex, endIndex),
  };
  if (startIndex > 0) {
    itemsResponse = {
      previus: {
        page: page - 1,
      },
      ...itemsResponse,
    };
  }
  if (endIndex < items.length) {
    itemsResponse = {
      next: {
        page: page + 1,
      },
      ...itemsResponse,
    };
  }

  res.json(itemsResponse);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const responseDescription = await getItemDetail(id);
  res.json(responseDescription);
});

module.exports = router;

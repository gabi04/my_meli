const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    name: "item 1",
    price: 1000,
  });
});

module.exports = router;

const { Router } = require("express");
const fs = require("fs");

const router = Router();

router.get("/", (req, res) => {
  list = JSON.parse(fs.readFileSync("list.json"));
  res.send(list);
});

module.exports = router;

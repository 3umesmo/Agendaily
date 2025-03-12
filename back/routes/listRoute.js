const { Router } = require("express");
const {
  getList,
  postInList,
  patchList,
  deleteList,
} = require("../controllers/listController");

const router = Router();

router.post("/:title/:desc/:date", postInList);
router.get("/", getList);
router.patch("/:id/:title/:desc/:date", patchList);
router.delete("/:id", deleteList);

module.exports = router;

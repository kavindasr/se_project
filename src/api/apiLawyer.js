const router = require("express").Router();

const {
  getLaws,
  getLawById,
  createLaw,
  updateLaw,
  deleteLaw,
} = require("../services/law_service");

router.get("/laws", getLaws, (req, res, next) => {
  res.send(req.arr);
});
router.get("/laws/:id", getLawById, (req, res, next) => {
  res.send(req.arr);
});
router.post("/laws", createLaw, (req, res, next) => {
  res.send(req.arr);
});
router.put("/laws/:id", updateLaw, (req, res, next) => {
  res.send(req.arr);
});
router.delete("/laws/:id", deleteLaw, (req, res, next) => {
  res.send(req.arr);
});

module.exports = router;

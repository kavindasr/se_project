const router = require("express").Router();
const { getUser } = require("../services/user_services");
const {
  createComplaint,
  updateComplaint,
  getComplaintStatus,
} = require("../services/complaint_service");

router.post("/", createComplaint, (req, res, next) => {
  res.send(req.arr);
});
router.put("/:id", updateComplaint, (req, res, next) => {
  res.send(req.arr);
});
router.get("/notification", getComplaintStatus, (req, res, next) => {
  res.send(req.arr);
});

module.exports = router;

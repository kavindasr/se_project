const router = require("express").Router();

const {
  getUsers,
  getUserById,
  createUser,
} = require("../services/user_services");
const {
  getWanteds,
  getWantedById,
  createWanted,
  updateWanted,
  deleteWanted,
} = require("../services/user_services");
const {
  getSuspects,
  getSuspectById,
  createSuspect,
  updateSuspect,
  deleteSuspect,
} = require("../services/suspect_service");
const {
  getComplaints,
  getComplaintById,
  createComplaint,
  updateComplaint,
  deleteComplaint,
} = require("../services/complaint_service");

router.get("/user", getUsers, (req, res, next) => {
  res.send(req.arr);
});
router.get("/user/:id", getUserById, (req, res, next) => {
  res.send(req.arr);
});
router.post("/user", createUser, (req, res, next) => {
  res.send(req.arr);
});

router.get("/wanted", getWanteds, (req, res, next) => {
  res.send(req.arr);
});
router.get("/wanted/:id", getWantedById, (req, res, next) => {
  res.send(req.arr);
});
router.post("/wanted", createWanted, (req, res, next) => {
  res.send(req.arr);
});
router.put("/wanted/:id", updateWanted, (req, res, next) => {
  res.send(req.arr);
});
router.delete("/wanted/:id", deleteWanted, (req, res, next) => {
  res.send(req.arr);
});

router.get("/suspects", getSuspects, (req, res, next) => {
  res.send(req.arr);
});
router.get("/suspects/:id", getSuspectById, (req, res, next) => {
  res.send(req.arr);
});
router.post("/suspects", createSuspect, (req, res, next) => {
  res.send(req.arr);
});
router.put("/suspects/:id", updateSuspect, (req, res, next) => {
  res.send(req.arr);
});
router.delete("/suspects/:id", deleteSuspect, (req, res, next) => {
  res.send(req.arr);
});

router.get("/complaints", getComplaints, (req, res, next) => {
  res.send(req.arr);
});
router.get("/complaints/:id", getComplaintById, (req, res, next) => {
  res.send(req.arr);
});
router.post("/complaints", createComplaint, (req, res, next) => {
  res.send(req.arr);
});
router.put("/complaints/:id", updateComplaint, (req, res, next) => {
  res.send(req.arr);
});
router.delete("/complaints/:id", deleteComplaint, (req, res, next) => {
  res.send(req.arr);
});

module.exports = router;

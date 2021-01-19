const router = require("express").Router();

const auth = require("../services/authService");
const {
  createComplaint,
  updateComplaint
  
  // getComplaintStatus,
} = require("../services/complaint_service");

router.post("/", createComplaint, (req, res, next) => {
  res.send(req.arr);
});
router.put("/:id", updateComplaint, (req, res, next) => {
  res.send(req.arr);
});

router.post("/logout",auth.logout,(req,res,next)=>{
  
  //res.redirect();
})
// router.get("/notification", getComplaintStatus, (req, res, next) => {
//   res.send(req.arr);
// });

module.exports = router;

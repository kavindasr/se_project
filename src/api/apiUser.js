const router = require("express").Router();

const auth = require("../services/authService");
const {
    createComplaint,
    updateComplaint,
    getComplaints,
    getComplaintById

    // getComplaintStatus,
} = require("../services/complaint_service");

router.get("/complaints", getComplaints, (req, res, next) => {
    complaints = req.complaints;
    res.json({ complaints });
});

router.get("/complaints/:id", getComplaintById, (req, res, next) => {
    complaint = req.complaint;
    res.json({ complaint });
});

router.post("/complaints", createComplaint, (req, res, next) => {
    res.json({ msg: "Created complaint" });
});

router.put("/complaints/:id", updateComplaint, (req, res, next) => {
    res.json({ msg: "edited complaint" });
});

router.post("/logout", auth.logout, (req, res, next) => {
    res.json({ msg: "logging out" });
})

module.exports = router;
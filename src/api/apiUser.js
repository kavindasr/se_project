const router = require("express").Router();

const auth = require("../services/authService");
const {
    createComplaint,
    updateComplaint

    // getComplaintStatus,
} = require("../services/complaint_service");

router.post("/", createComplaint, (req, res, next) => {
    if (err) {
        return;
    } else {
        res.json({ msg: "Created complaint" });
    }
});
router.put("/:id", updateComplaint, (req, res, next) => {
    if (err) {
        return;
    } else {
        res.json({ msg: "edited complaint" });
    }
});

router.post("/logout", auth.logout, (req, res, next) => {
    res.json({ msg: "logging out" });

})

module.exports = router;
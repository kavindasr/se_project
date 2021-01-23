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
} = require("../services/wanted_service");
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
    users = req.users;
    res.json({ users });
});
router.get("/user/:id", getUserById, (req, res, next) => {
    res.json({ usersByID: req.userId });
});



router.post("/user", createUser, (req, res, next) => {
    res.json({ msg: "successfully registered" });
});

router.get("/wanted", getWanteds, (req, res, next) => {
    res.json({ Allwanteds: req.wanteds });
});
router.get("/wanted/:id", getWantedById, (req, res, next) => {
    res.json({ wantedBYId: req.wantedId });
});
router.post("/wanted", createWanted, (req, res, next) => {
    if (err) {
        return;
    } else {
        res.json({ msg: "Added wanted" });
    }
});
router.put("/wanted/:id", updateWanted, (req, res, next) => {
    if (err) {
        return;
    } else {
        res.json({ msg: "Edited wanted" });
    }

});
router.delete("/wanted/:id", deleteWanted, (req, res, next) => {
    if (err) {
        return;
    } else {
        res.json({ msg: "Deleted wanted" });
    }
});

router.get("/suspects", getSuspects, (req, res, next) => {
    suspects = req.suspects;
    res.json({ suspects });
});

router.get("/suspects/:id", getSuspectById, (req, res, next) => {
    res,
    json({ suspectById: req.suspectId });
});
router.post("/suspects", createSuspect, (req, res, next) => {
    if (err) {
        return;
    } else {
        res.json({ msg: "Added suspect" });
    }
});
router.put("/suspects/:id", updateSuspect, (req, res, next) => {
    if (err) {
        return;
    } else {
        res.json({ msg: "Edited wanted" });
    }
});
router.delete("/suspects/:id", deleteSuspect, (req, res, next) => {
    if (err) {
        return;
    } else {
        res.json({ msg: "Deleted wanted" });
    }
});

router.get("/complaints", getComplaints, (req, res, next) => {
    res.json({ Allcomplaints: req.complaints });
});

router.get("/complaints/:id", getComplaintById, (req, res, next) => {
    res.json({ complaintById: req.complaintId });
});

router.put("/complaints/:id", updateComplaint, (req, res, next) => {
    if (err) {
        return;
    } else {
        res.json({ msg: "Edited complaint" });
    }
});

router.delete("/complaints/:id", deleteComplaint, (req, res, next) => {
    if (err) {
        return;
    } else {
        res.json({ msg: "Deleted wanted" });
    }
});

module.exports = router;
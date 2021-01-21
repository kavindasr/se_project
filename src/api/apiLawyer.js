const router = require("express").Router();

const {
  getLaws,
  getLawById,
  createLaw,
  updateLaw,
  deleteLaw,
} = require("../services/law_service");

router.get("/laws", getLaws, (req, res, next) => {
  res.json({AllLaws:laws});
});
router.get("/laws/:id", getLawById, (req, res, next) => {
 res.json({lawById:lawId});
});
router.post("/laws", createLaw, (req, res, next) => {
  if(err){
    return;
  }
  else{
    res.json({msg:"Added law"});
  }
});
router.put("/laws/:id", updateLaw, (req, res, next) => {
  if(err){
    return;
  }
  else{
    res.json({msg:"Edited law"});
  }
});
router.delete("/laws/:id", deleteLaw, (req, res, next) => {
  if(err){
    return;
  }
  else{
    res.json({msg:"Deleted law"});
  }
});

module.exports = router;

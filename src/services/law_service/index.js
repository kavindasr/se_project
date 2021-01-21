const sequelize = require("../../helpers/sequelizer");
const ApiError =require('../../helpers/APIerror');
const law = require("../../models/lawModel");

const getArticles = async (req, res, next) => {
  // logic to get all articles
  next();
};
const getLaws = async (req, res, next) => {
  // logic to get all laws
  try{
    const laws = await law.findAll();
    req.laws=laws;
  
  
  
  next();
  }catch(e){
    next(ApiError.badRequest());
  }
  
};
const getLawById = async (req, res, next) => {
  // logic to get law by id
  try{
    const lawId = await law.findAll({
      where: {
        id: req.params.id
      }
    });
    req.lawId=lawId;
    next();
  }catch(e){
    next(ApiError.badRequest());
  }
  
};
const createLaw = async (req, res, next) => {
  // create a new law
  try{
    const id = req.body.id,
   num = req.body.number,
   law = req.body.law,
  lawyer=req.user.id;
   

const newLaw = await law.create({id:id,
  law_number:num,
  law_notes:law,
  lawyer_id:lawyer
  
});
  // Create a new law and save to DB
  req.newLaw=newLaw;
next();
  }catch(err){
    next(ApiError.badRequest())
  }

  
};
const updateLaw = async (req, res, next) => {
  // update law
  try{
    const updatedLaw = await law.update({ law_number:req.body.law_number,law_notes:req.body.law_notes }, {
      where: {
        id: req.params.id
      }
    });
    req.updatedLaw=updatedLaw;
    next();
  
  }catch(e){
    next(ApiError.badRequest());
  }
};
  
const deleteLaw = async (req, res, next) => {
  // delte a law
  try{
    await law.destroy({
      where: {
        id: req.params.id
      }
     
  
 
  });
  next();

}catch(e){
  next(ApiError.badRequest());
}
     
 
};
const getEmergency = async (req, res, next) => {
  // get emergency numbers

  next();
};

module.exports = {
  getArticles,
  getLaws,
  getLawById,
  getEmergency,
  createLaw,
  updateLaw,
  deleteLaw,
};


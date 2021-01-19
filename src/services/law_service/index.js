const sequelize = require("../../helpers/sequelizer");
const law = require("../../models/lawModel");

const getArticles = async (req, res, next) => {
  // logic to get all articles
  next();
};
const getLaws = async (req, res, next) => {
  // logic to get all laws
  const laws = await law.findAll();
  
  
  
  next();
};
const getLawById = async (req, res, next) => {
  // logic to get law by id
  const lawId = await law.findAll({
    where: {
      id: req.params.id
    }
  });
 
  next();
};
const createLaw = async (req, res, next) => {
  // create a new law
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
next();
  
};
const updateLaw = async (req, res, next) => {
  // update low
  const updatedLaw = await law.update({ law_number:req.body.law_number,law_notes:req.body.law_notes }, {
    where: {
      id: req.params.id
    }
  });
  next();
};
const deleteLaw = async (req, res, next) => {
  // delte a law
  await law.destroy({
    where: {
      id: req.params.id
    }
  });
  next();
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


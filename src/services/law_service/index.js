const sequelize = require("../../helpers/sequelizer");

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
  number:num,
  law:law,
  lawyer:lawyer
  
});
  // Create a new law and save to DB
next();
  
};
const updateLaw = async (req, res, next) => {
  // update low
  const updatedLaw = await law.update({ number:req.body.number,law:req.body.law }, {
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


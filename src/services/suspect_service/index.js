const sequelize = require("../../helpers/sequelizer");
const suspect = require("../../models/suspectModel");

const getSuspects = async (req, res, next) => {
  // sequalize logic here
  const suspects = await suspect.findAll();
  

  next();
};
const getSuspectById = async (req, res, next) => {
  // sequalize logic here
  const suspectId = await suspect.findAll({
    where: {
      id: req.params.id
    }
  });
  
  next();
};
const createSuspect = async (req, res, next) => {
  // sequalize logic here
 const id=req.params.id,
  fn = req.body.first_name,
  ln = req.body.last_name,
  desc = req.body.description,
  img=req.body.image,
  police = req.user.id;
  
// Create a new complaint and save to DB
  
const newSuspect = await suspect.create({id:id,
  first_name:fn,
  last_name:ln,
  description:desc,
  image:img,
  police:police,
  status:0
  
  


});
  
  
};
const updateSuspect = async (req, res, next) => {

  // sequalize logic here
  const updatedSuspect= await suspect.update({ first_name:req.body.first_name,last_name:req.body.last_name,description:req.body.mobile,address:req.body.description,image:req.body.image }, {
    where: {
      id: req.params.id
    }
  });
  next();
};
const deleteSuspect = async (req, res, next) => {
  // sequalize logic here
  await law.destroy({
    where: {
      id: req.params.id
    }
  });
  next();
};

module.exports = {
  getSuspects,
  getSuspectById,
  createSuspect,
  updateSuspect,
  deleteSuspect,
};

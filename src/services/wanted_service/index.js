const sequelize = require("../../helpers/sequelizer");
const wanted = require("../../models/wantedModel");


const getWanteds = async (req, res, next) => {
  //  sequalize logic here
  const wanteds = await wanted.findAll();
  
  next();
};
const getWantedById = async (req, res, next) => {
  //  sequalize logic 
  const wantedId = await wanted.findAll({
    where: {
      id: req.params.id
    }
  });
  next();
};
const createWanted = async (req, res, next) => {
  //  sequalize logic here
  const id = req.body.id,
  f_n = req.body.first_name,
  l_n =req.body.last_name,
  desc=req.body.description,
  img=req.body.image,
  police = req.user.id;
     
  // Create a new wanted and save to DB 
  const newWanted = await wanted.create({id:id,
  first_name:f_n,
  last_name:l_n,
  description:desc,
  image:img,
  police_id:police,
  status:0
  });
  
  next();
};
const updateWanted = async (req, res, next) => {
  //  sequalize logic here
  const updatedWanted= await wanted.update({ first_name:req.body.first_name,last_name:req.body.last_name,description:req.body.description,image:req.body.image }, {
    where: {
      id: req.params.id
    }
  });
  next();
};
const deleteWanted = async (req, res, next) => {
  //  sequalize logic here
  await wanted.destroy({
    where: {
      id: req.params.id
    }
  });
  next();
};

module.exports = {
  getWanteds,
  getWantedById,
  createWanted,
  updateWanted,
  deleteWanted,
};

const sequelize = require("../../helpers/sequelizer");
const user = require("../../models/userModel");

const getUsers = async (req, res, next) => {

  // sequalize logic goes here
  const users = await user.findAll();
  next();
};
const getUserById = async (req, res, next) => {
  // sequalize logic goes here
  const userId = await user.findAll({
    where: {
      id: req.params.id
    }
  });
  next();
};
const createUser = async (req, res, next) => {
  // sequalize logic goes here
  const id = req.body.id,
  nic = req.body.nic,
  f_n = req.body.first_name,
  l_n= req.body.last_name,
  email=req.body.email,
  password=req.body.password,
  mob=req.body.mobile,
  level=req.body.level;
     
  // Create a new complaint and save to DB 
const newUser = await user.create({id:id,
  nic:nic,
  fullname:f_n,
  last_name:l_n,
  email:email,
  password:password,
  mobile:mob,
  level:level,
  created_on:Date.now(),
  status:0


});
  next();
};

module.exports = { getUsers, getUserById, createUser };

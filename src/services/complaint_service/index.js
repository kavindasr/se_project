const sequelize = require("../../helpers/sequelizer");
const complaint = require("../../models/complaintModel");
const getComplaints = async (req, res, next) => {
  // logic for getting all complaints
  const complaints = await complaint.findAll();
  

  next();
};
const getComplaintById = async (req, res, next) => {
  // logic for getting a complaint by id
  const complaintId = await complaint.findAll({
    where: {
      id: req.params.id
    }
  });
  
  next();
};
const createComplaint = async (req, res, next) => {
  // create new complaint
  const id = req.body.id,
  nic = req.body.nic,
  f_n = req.body.full_name,
  mob=req.body.mobile,
  add = req.body.address,
  comp=req.body.complaint,
  people=req.user.id;
     
  // Create a new complaint and save to DB 
  const newComplaint = await complaint.create({id:id,
  nic:nic,
  fullname:f_n,
  mobile:mob,
  address:add,
  complaint:comp,
  people:people,
  created_on:Date.now(),
  status:0
  });
  next();
  
};
const updateComplaint = async (req, res, next) => {
  // update complaint logic
 const updatedComplaint= await complaint.update({ nic:req.body.nic,fullname:req.body.fullname,mobile:req.body.mobile,address:req.body.address,complaint:req.body.compalint }, {
    where: {
      id: req.params.id
    }
  });
  next();
};
const deleteComplaint = async (req, res, next) => {
  // delete complaint logic
  await complaint.destroy({
    where: {
      id: req.params.id
    }
  });
  next();
};

module.exports = {
  getComplaints,
  getComplaintById,
  createComplaint,
  updateComplaint,
  deleteComplaint,
};

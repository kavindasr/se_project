const sequelize = require("../../helpers/sequelizer");

const getComplaints = async (req, res, next) => {
  // logic for getting all complaints
  next();
};
const getComplaintById = async (req, res, next) => {
  // logic for getting a complaint by id
  next();
};
const createComplaint = async (req, res, next) => {
  // create new complaint
  next();
};
const updateComplaint = async (req, res, next) => {
  // update complaint logic
  next();
};
const deleteComplaint = async (req, res, next) => {
  // delete complaint logic
  next();
};

module.exports = {
  getComplaints,
  getComplaintById,
  createComplaint,
  updateComplaint,
  deleteComplaint,
};

const sequelize = require("../../helpers/sequelizer");

const getArticles = async (req, res, next) => {
  // logic to get all articles
  next();
};
const getLaws = async (req, res, next) => {
  // logic to get all laws
  next();
};
const getLawById = async (req, res, next) => {
  // logic to get law by id
  next();
};
const createLaw = async (req, res, next) => {
  // create a new law
  next();
};
const updateLaw = async (req, res, next) => {
  // update low
  next();
};
const deleteLaw = async (req, res, next) => {
  // delte a law
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

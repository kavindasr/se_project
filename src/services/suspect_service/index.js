const sequelize = require("../../helpers/sequelizer");
const ApiError = require('../../helpers/ApiError');
const suspect = require("../../models/suspectModel");

const getSuspects = async(req, res, next) => {
    // sequalize logic here
    try {
        const suspects = await suspect.findAll();
        req.suspects = suspects;
        next();
    } catch (e) {
        next(ApiError.badRequest());
    }
};

const getSuspectById = async(req, res, next) => {
    // sequalize logic here
    try {
        const suspectId = await suspect.findAll({
            where: {
                id: req.params.id
            }
        });
        req.suspectId = suspectId;
        next();
    } catch (e) {
        next(ApiError.badRequest());
    }
};

const createSuspect = async(req, res, next) => {
    // sequalize logic here
    try {
        const id = req.params.id,
            fn = req.body.first_name,
            ln = req.body.last_name,
            desc = req.body.description,
            img = req.body.image,
            police = req.user.id;

        // Create a new complaint and save to DB

        const newSuspect = await suspect.create({
            id: id,
            first_name: fn,
            last_name: ln,
            description: desc,
            image: img,
            police_id: police,
            status: 0

        });
        req.newSusect = newSuspect;
        next();

    } catch (e) {
        next(ApiError.badRequest());
    }
};


const updateSuspect = async(req, res, next) => {

    // sequalize logic here
    try {
        const updatedSuspect = await suspect.update({ first_name: req.body.first_name, last_name: req.body.last_name, description: req.body.mobile, address: req.body.description, image: req.body.image }, {
            where: {
                id: req.params.id
            }
        });
        req.updatedSuspect = updatedSuspect;
        next();
    } catch (e) {
        next(ApiError.badRequest());
    }
};


const deleteSuspect = async(req, res, next) => {
    // sequalize logic here
    try {
        await law.destroy({
            where: {
                id: req.params.id
            }
        });
        next();
    } catch (e) {
        next(ApiError.badRequest());
    }
};

module.exports = {
    getSuspects,
    getSuspectById,
    createSuspect,
    updateSuspect,
    deleteSuspect,
};
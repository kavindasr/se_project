const sequelize = require("../../helpers/sequelizer");
const ApiError = require('../../helpers/ApiError');
const user = sequelize.models.users;

const getUsers = async(req, res, next) => {
    // sequalize logic goes here
    try {
        const users = await user.findAll();
        req.users = users;
        next();
    } catch (e) {
        next(ApiError.badRequest());
    }
};


const getUserById = async(req, res, next) => {
    // sequalize logic goes here
    try {
        const userId = await user.findAll({
            where: {
                id: req.params.id
            }
        });
        req.userId = userId;
        next();
    } catch (e) {
        next(ApiError.badRequest());
    }

};


const createUser = async(req, res, next) => {
    // sequalize logic goes here


    try {
        const nic = req.body.nic,
            f_n = req.body.first_name,
            l_n = req.body.last_name,
            email = req.body.email,
            password = req.body.password,
            mob = req.body.mobile,
            level = req.body.level;

        // Create a new user and save to DB 
        const newUser = await user.create({
            nic: nic,
            first_name: f_n,
            last_name: l_n,
            email: email,
            password: password,
            mobile: mob,
            level: level,
            created_on: Date.now(),
            status: 0
        });

        req.newUser = newUser;
        next();
    } catch (e) {
        console.log(e);
        next(ApiError.badRequest());
    }
};

module.exports = { getUsers, getUserById, createUser };
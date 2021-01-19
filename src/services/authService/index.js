const sequelize = require("../../helpers/sequelizer");

const user = require("../../models/userModel");

const login = async (req, res, next) => {
  // login logic here
  const { email, password } = req.body;
    const foundUser = await user.findAndValidate(email, password);
    if (foundUser) {
        req.session.user_id = foundUser.id;
        req.session.first_name=foundUser.first_name;
        req.session.level=foundUser.level;
       // res.redirect();
    }
    else {
        //res.redirect()
    }
  next();
};

const logout = async (req, res, next) => {
  // logout logic here
        req.session.user_id = null;
        req.session.first_name=null;
        req.session.level=null;
       // res.redirect();
        next();
       
};




module.exports = { login,logout };

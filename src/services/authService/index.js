const sequelize = require("../../helpers/sequelizer");
const bcrypt=require("bcrypt");

const user = require("../../models/userModel");

/*findAndValidate = async function (email, password) {
  const foundUser = await user.findAll({where: {email:email }});
  const isValid = await bcrypt.compare(password, foundUser.password);
  return isValid ? foundUser : false;
}*/





const login = async (req, res) => {
  // login logic here
  try {
    const {email, password } = req.body;
    if( !email || !password ){
        return res.status(400).json( {
           status:"error",
            error: 'Please provie an username and password'
        })
    }
    else{
        const foundUser= await user.findAll({where:{email:email}}, async (error, result)=>{
            if(error) console.log('error', error);
            
            else{ 
              
              if(!result || !(await bcrypt.compare(password, foundUser.password) ) ){
                //console.log(result);
                res.status(401).json({
                  status:"error",
                  message: 'email or password incorrect!'
              });
            
                
              if(result.length > 0 ){
                    req.session.id = foundUser.id;
                    req.session.level = foundUser.level;
                    res.status(200).json({
                      status:"success",
                      message:"Logged in succesfully"
                    });
                }else{
                    res.status(400).json( {
                        error: 'Cannot find the account'
                    })
                }
            }
          }
        
    })
  }

} catch (error) {
    console.log(error);
}
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

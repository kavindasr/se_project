const initModels = ()=>{
    const user = require('./userModel');
    const police = require('./policeModel');
    const lawyer = require('./lawyerModel');
    const people = require('./peopleModel');
    const complaint = require('./complaintModel');
    const harassment = require('./harassmentModel');
    const law = require('./lawModel');
    const wanted = require('./wantedModel');
    const suspect = require('./suspectModel');
    const station = require('./stationModel');
}

module.exports = initModels;
const homeRoutes = require("./apiHome");
const userRoutes = require("./apiUser");
const lawyerRoutes = require("./apiLawyer");
const policeRoutes = require("./apiPolice");

const endPointsHandler = (app) => {
  app.use("/api/", homeRoutes);
  app.use("/api/user", userRoutes);
  app.use("/api/lawyer", lawyerRoutes);
  app.use("/api/police", policeRoutes);
};

module.exports = { endPointsHandler };

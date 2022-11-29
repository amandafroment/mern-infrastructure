module.exports = function (req, res, next) {
  // Status code of 401 is Unauthorized
  // is the user there? if they aren't there, we want to return unauthorized
  if (!req.user) return res.status(401).json("Unauthorized");
  // otherwise, A okay and they can go on to the rest of the routes
  next();
};

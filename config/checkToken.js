const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  // Check for the token being sent in a header or as a query parameter
  // we attach the token to an authorization header
  // check authorization header or req.query.token(through the url)
  let token = req.get("Authorization") || req.query.token;
  //if the token exists
  if (token) {
    // Remove the 'Bearer ' if it was included in the token header
    // replacing bearer with nothing, we just want the token
    token = token.replace("Bearer ", "");
    // Check if token is valid and not expired
    jwt.verify(token, process.env.SECRET, function (err, decoded) {
      // If valid token, decoded will be the token's entire payload
      // If invalid token, err will be set
      req.user = err ? null : decoded.user;
      // If your app cares... (optional)
      req.exp = err ? null : new Date(decoded.exp * 1000);
      return next();
    });
  } else {
    // No token was sent
    req.user = null;
    return next();
  }
};

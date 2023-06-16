const jwt = require("jsonwebtoken");
const { TOKEN_SECRET } = require("../utils/auth");

function authenticationMiddleware(req, res, next) {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  } else {
    token = token.split(" ");
  }
  try {
    const decoded = jwt.verify(token[1], TOKEN_SECRET);
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
}

module.exports = authenticationMiddleware;

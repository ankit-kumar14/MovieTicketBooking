const jwt = require('jsonwebtoken');
const { TOKEN_SECRET } = require('../utils/auth');

function authenticationMiddleware(req, res, next) {
  let token = req.headers.authorization;
  token = token.split(' ');

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    console.log(token[1], "---------", TOKEN_SECRET)
    const decoded = jwt.verify(token[1], TOKEN_SECRET);
    console.log(decoded)
    req.user = decoded;
    console.log("Authenticated")
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}

module.exports = authenticationMiddleware;

const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'supersecret';

const authMiddleware = ({ req }) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (token) {
    try {
      req.user = jwt.verify(token, secret);
    } catch {
      console.error('Invalid token');
    }
  }
  return req;
};

const signToken = ({ username, email, _id }) => {
  return jwt.sign({ username, email, _id }, secret, { expiresIn: '2h' });
};

module.exports = { authMiddleware, signToken };

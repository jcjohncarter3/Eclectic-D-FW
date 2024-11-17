const jwt = require("jsonwebtoken");

// set token secret and expiration date
const secret = "mysecretsshhhhh";
const expiration = "2h";

module.exports = {
  // function for our authenticated routes
  authMiddleware: async ({ req, res }) => {
    let token = req.headers.authorization || null;

    if (token) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      // return res.status(400).json({ message: "You have no token!" });
      return {
        hasToken: false,
        data: null,
      };
    }

    try {
      const { data } = jwt.verify(token, process.env.JWT_SECRET, {
        maxAge: expiration,
      });

      req.user = data;
      return {
        hasToken: true,
        data,
      };
    } catch {
      console.log("Invalid token");
      return res.status(400).json({ message: "invalid token!" });
    }
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, process.env.JWT_SECRET, {
      expiresIn: expiration,
    });
  },
};

const jwt = require("jsonwebtoken");

// set token secret and expiration date
const secret = "mysecretsshhhhh";
const expiration = "2h";

module.exports = {
  // function for our authenticated routes
  auth2: async ({ req, res }) => {
    console.log("headers: ", req.headers.authorization);
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
    console.log("----", token);
    try {
      const { data } = jwt.verify(token, process.env.JWT_SECRET, {
        maxAge: expiration,
      });
      console.log("data", data);
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
  // authMiddleware: function (req, res, next) {
  // console.log("authMiddleware: ", req.get("Authorization"));
  // allows token to be sent via  req.query or headers
  // let token = req.query.token || req.headers.authorization;

  // // ["Bearer", "<tokenvalue>"]
  // if (req.headers.authorization) {
  //   token = token.split(" ").pop().trim();
  // }

  // if (!token) {
  //   return res.status(400).json({ message: "You have no token!" });
  // }

  // // verify token and get user data out of it
  // try {
  //   const { data } = jwt.verify(token, process.env.JWT, {
  //     maxAge: expiration,
  //   });
  //   req.user = data;
  // } catch {
  //   console.log("Invalid token");
  //   return res.status(400).json({ message: "invalid token!" });
  // }

  // send to next endpoint
  // next();
  // },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, process.env.JWT_SECRET, {
      expiresIn: expiration,
    });
  },
};

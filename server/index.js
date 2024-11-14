require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
// const { expressMiddleware } = require("@apollo/server/express4");
const path = require("path");
const db = require("./config/db");
const typeDefs = require("./schemas/typeDefs");
const resolvers = require("./schemas/resolvers");
const { authMiddleware } = require("./utils/auth");

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // Important for MERN Setup: When our application runs from production, it functions slightly differently than in development
  // In development, we run two servers concurrently that work together
  // In production, our Node server runs and delivers our client-side bundle from the dist/ folder
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/dist")));

    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../client/dist/index.html"));
    });
  }

  // app.use("/graphql", expressMiddleWare);
  // Important for MERN Setup: Any client-side requests that begin with '/graphql' will be handled by our Apollo Server
  // app.use("/graphql", expressMiddleware(server));
  server.applyMiddleware({
    app,

    // By default, apollo-server hosts its GraphQL endpoint at the
    // server root. However, *other* Apollo Server packages host it at
    // /graphql. Optionally provide this to match apollo-server.
    path: "/graphql",
  });
  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

startApolloServer();

// const express = require('express');
// const { ApolloServer } = require('apollo-server-express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.error('MongoDB connection error:', err));

// // Basic GraphQL setup
// const typeDefs = `
//   type Query {
//     hello: String
//   }
// `;

// const resolvers = {
//   Query: {
//     hello: () => 'Hello, MERN Stack!',
//   },
// };

// const server = new ApolloServer({ typeDefs, resolvers });
// server.applyMiddleware({ app });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}${server.graphqlPath}`);
// });

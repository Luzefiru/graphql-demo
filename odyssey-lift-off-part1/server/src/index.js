const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const typeDefs = require('./schema.js');

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs }); // destructure typeDefs as args
  const { url } = await startStandaloneServer(server); // await the URL
  console.log(`Server is being served on ${url}`); // log it and query it later
}

startApolloServer();

const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const TrackAPI = require('./datasources/track-api');

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    context: async () => {
      const { cache } = server; // enable caching
      return {
        dataSources: {
          trackAPI: new TrackAPI({ cache }), // pass in the cache from the ApolloServer
        },
      };
    },
  });

  console.log(`
      🚀  Server is running
      📭  Query at ${url}
    `);
}

startApolloServer();

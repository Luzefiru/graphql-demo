const resolvers = {
  Query: {
    // returns an array of Tracks that will populate the homepage grid in the client
    tracksForHome: (parent, args, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
  },
};

module.exports = resolvers;

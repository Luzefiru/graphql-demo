const gql = require('graphql-tag');

const typeDefs = gql`
  "A track is a group of Modules that teach a specific topic"
  type Track {
    id: ID!
    "the track's title"
    title: String!
    "the tracks main author"
    author: Author!
    "a URL to the track's main illustration to display in track card or in the track page details"
    thumbnail: String
    "the track's approximate length to complete, in minutes"
    length: Int
    "the number of modules contained in the track"
    modulesCount: Int
  }

  "Author of a complete Track"
  type Author {
    id: ID!
    "the Author's first name and last name"
    name: String!
    "URL of the Author's profile picture"
    photo: String!
  }
`;

module.exports = typeDefs;

import React from 'react';
import { Layout } from '../components';
// GraphQL imports
import { gql, useQuery } from '@apollo/client';
import TrackCard from '../containers/track-card';

/** TRACKS query to retrieve all tracks */
const TRACKS = gql`
  query GetTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        name
        photo
      }
    }
  }
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  // we destructure the useQuery(QUERY_CONSTANT) result
  const { loading, error, data } = useQuery(TRACKS);
  // loading is a boolean that indicates whether the query is still running (true) or not (false)
  if (loading) return 'Loading';
  // any error returned by the JSON will be handled here
  if (error) return `ERROR! ${error.message}`;
  // otherwise, we render the received query data
  return (
    <Layout grid>
      {data?.tracksForHome?.map((track) => (
        <TrackCard key={track.id} track={track} />
      ))}
    </Layout>
  );
};

export default Tracks;

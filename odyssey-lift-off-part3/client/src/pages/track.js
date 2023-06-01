import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Layout, QueryResult } from '../components';
import { useParams } from 'react-router-dom';

const GET_TRACK = gql`
  query GetTrack($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
      description
      numberOfViews
      modules {
        id
        title
        length
      }
    }
  }
`;

const Track = () => {
  const { trackId } = useParams();
  const { loading, error, data } = useQuery(GET_TRACK);

  return <Layout></Layout>;
};

export default Track;

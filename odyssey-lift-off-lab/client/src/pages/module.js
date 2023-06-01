import React from 'react';
import { Layout, QueryResult, ModuleDetail } from '../components';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

const GET_TRACK_MODULES = gql`
  query getModuleAndParentTrack($moduleId: ID!, $trackId: ID!) {
    track(id: $trackId) {
      id
      title
      modules {
        id
        title
        length
      }
    }
    module(id: $moduleId) {
      id
      title
      content
      length
      videoUrl
    }
  }
`;

const Module = () => {
  const { trackId, moduleId } = useParams();
  const { loading, error, data } = useQuery(GET_TRACK_MODULES, {
    variables: { trackId, moduleId },
  });

  return (
    <Layout fullWidth>
      <QueryResult loading={loading} error={error} data={data}>
        <ModuleDetail track={data?.track} module={data?.module} />
      </QueryResult>
    </Layout>
  );
};

export default Module;

import { gql } from 'graphql-request';

export const GET_CUBE_DATA = gql`
  query GetCubeData($country: String!, $measure: String!) {
    cube_cube_M6Lh5is0FtqUhZ(
      where: { country: { _eq: $country }, measure: { _eq: $measure } }
    ) {
      value
      year
    }
  }
`;

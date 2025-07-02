import { gql } from 'graphql-request';

export const GET_COUNTRIES = gql`
  query GetCountries {
    item(where: {class_id: {_eq: "Country"}}) {
      id
      name: name(path: "en")
      iso2: statements(where: {property_id: {_eq: "iso2"}}) {
        value: postgres_varchar
      }
    }
  }
`;

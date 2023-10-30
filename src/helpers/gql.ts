import {gql} from 'graphql-request';

export const queryGetCompany = gql`
  query GetCompany($id: String!) {
    getCompany(id: $id) {
      id
      name
      description
      coverImageUrl
      logoUrl
      investmentRaised
      investmentSought
      numberOfInvestors
      percentageRaised
      endDate
      valuation
      country
      city
      updates {
        items {
          id
          title
          body
          createdAt
        }
      }
    }
  }
`;

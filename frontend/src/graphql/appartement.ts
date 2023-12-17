import { gql } from "@apollo/client";

export const ADD_APPARTEMENT = gql`
  mutation AddAppartment(
    $number: String!
    $floor: String!
    $client: ClientInput!
    $syndic_id: String!
  ) {
    addAppartment(
      number: $number
      floor: $floor
      client: $client
      syndic_id: $syndic_id
    ) {
      number
      floor
      client {
        full_name
        phone_number
      }
      syndic_id
    }
  }
`;

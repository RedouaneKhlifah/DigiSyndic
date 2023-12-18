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
      id
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

export const UPDATE_APPARTEMENT = gql`
  mutation updateAppartment(
    $id: ID!
    $number: String!
    $floor: String!
    $client: ClientInput!
    $syndic_id: String!
  ) {
    updateAppartment(
      id: $id
      number: $number
      floor: $floor
      client: $client
      syndic_id: $syndic_id
    ) {
      id
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

export const DELETE_APPARTEMENT = gql`
  mutation deleteAppartement($id: ID!, $syndic_id: String!) {
    deleteAppartement(id: $id, syndic_id: $syndic_id) {
      id
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

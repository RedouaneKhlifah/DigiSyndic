import { gql, useQuery } from "@apollo/client";
// import { useEffect } from "react";
// import { getAccessToken } from "../accessToken";

const SYNDICS_QUERY = gql`
  {
    syndics {
      id
      fullName
      email
      role
    }
  }
`;

function Factor() {
  const { data, loading, error } = useQuery(SYNDICS_QUERY);

  return (
    <>
      {loading && <div>loading</div>}
      {data && <div>{JSON.stringify(data)}</div>}
      {error && <div>{JSON.stringify(error.message)}</div>}
    </>
  );
}

export default Factor;

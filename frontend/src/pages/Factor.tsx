import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { getAccessToken } from "../accessToken";

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
  console.log(getAccessToken());

  function getSyndics() {
    // No need to call SyndicQuery as a function
    if (loading) {
      return <div>loading</div>;
    }
    if (error) {
      return <div>{JSON.stringify(error)}</div>;
    }
    return <div>{JSON.stringify(data)}</div>;
  }

  useEffect(() => {
    getSyndics();
  }, []);

  return (
    <>
      {loading && <div>loading</div>}
      {data && <div>{JSON.stringify(data)}</div>}
      {error && <div>{JSON.stringify(error.message)}</div>}
    </>
  );
}

export default Factor;

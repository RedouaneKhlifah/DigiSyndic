import axios from "axios";
import { setAccessToken } from "./accessToken";
import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";

function RefreshToken() {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    async function refreshTokenReq() {
      try {
        const response = await axios.post(
          "http://localhost:5000/refrech_token",
          {},
          { withCredentials: true }
        );
        const accessToken = response.data?.accessToken;
        setAccessToken(accessToken);
        const user = response.data.user;
        dispatch({ type: "LOGIN", payload: user });
      } catch (error) {
        console.log(error);
      }
    }
    refreshTokenReq();
  }, [dispatch]);
  return <></>;
}

export default RefreshToken;

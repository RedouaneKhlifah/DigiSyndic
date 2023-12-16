import Inpute from "../ui/inputs/Inpute";
import Button from "../ui/button/Button";
import React, { FormEvent, useLayoutEffect, useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { setAccessToken } from "../../accessToken";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/ReduxHooks";

const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    Login(email: $email, password: $password) {
      accessToken
      user {
        id
        fullName
        role
      }
    }
  }
`;

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.user);
  useLayoutEffect(() => {
    if (user) {
      navigate("/factor");
    }
  }, [navigate, user]);

  const [form, setfrom] = useState({
    email: "",
    password: "",
  });
  const [loginMutation] = useMutation(LOGIN_MUTATION);
  const [Error, setError] = useState<string | null>(null);

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setfrom((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handelSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { data } = await loginMutation({
        variables: {
          email: form.email,
          password: form.password,
        },
      });

      if (data) {
        setAccessToken(data.Login.accessToken);
        const user = data?.Login?.user;
        dispatch({ type: "LOGIN", payload: user });
        setError(null);
        navigate("/factor");
      }
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  return (
    <>
      <div className=" flex justify-center items-center">
        <div className=" w-3/6  ">
          <form onSubmit={handelSubmit}>
            <div className="pb-3">
              <p className=" font-semibold text-2xl text-center  ">Sign Up</p>
            </div>
            {Error && (
              <p className="text-sm text-red-600 text-center ">{Error}</p>
            )}
            <div>
              <Inpute
                label="Email"
                name="email"
                placeHolder="exemple@gmail.com"
                inputStyling={` ${
                  Error ? "border-red-500" : "border-none"
                } w-full outline-none focus:outline-none bg-blue-50 shadow-sm rounded-2xl px-2 py-2 text-sm my-2 mb-6 pl-4 placeholder:text-xs border-[1px] `}
                func={handelChange}
              />

              <Inpute
                label="Mot de pass"
                name="password"
                placeHolder="**********"
                inputStyling={` ${
                  Error ? "border-red-500" : "border-none"
                } w-full outline-none focus:outline-none bg-blue-50 shadow-sm rounded-2xl px-2 py-2 text-sm my-2 mb-6 pl-4 placeholder:text-xs border-[1px] `}
                func={handelChange}
              />
            </div>
            <div className="flex justify-between mt-1">
              <div className="flex items-center justify-center  ">
                <input
                  className=" appearance-none w-3 h-3 border-[1px] border-blue-500 rounded-sm bg-white   checked:bg-blue-800 checked:border-0
                focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100
                disabled:border-steel-400 disabled:bg-steel-400"
                  type="checkbox"
                  name="ResterConnecter"
                  id="checkbox"
                />
                <label className="text-sm pl-2" htmlFor="checkbox">
                  ResterConnecter
                </label>
              </div>
              <div className="">
                <label className=" text-DarkBlue text-sm ">
                  Mot de pass oublie
                </label>
              </div>
            </div>
            <div className="flex justify-center w-full  mt-4">
              <Button
                text="Se Connecter"
                styling="bg-DarkBlue px-5 py-2 w-full rounded-3xl text-white text-sm  "
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;

import LoginForm from "../components/forms/LoginForm";
import { sideImage } from "../assets/img";

function Login() {
  return (
    <div className="grid grid-cols-2">
      <LoginForm />
      <div className=" h-screen overflow-hidden  ">
        <img
          className=" pt-2 pr-1 w-full rounded-tr-2xl "
          src={sideImage}
          alt="sideImage"
        />
      </div>
    </div>
  );
}

export default Login;

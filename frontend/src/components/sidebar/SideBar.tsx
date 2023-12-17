import { useState } from "react";
import { logo } from "../../assets/img/";
import "../../assets/css/sidbar.css";
import { useLocation, useNavigate } from "react-router-dom";

function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedOption, setSelectedOption] = useState(location.pathname);

  const handleOptionClick = (option: string) => {
    setSelectedOption("/" + option);
    if (option !== selectedOption) {
      navigate(option);
    }
  };
  //   useEffect(() => {}, [selectedOption]);

  return (
    <div className=" shadow-sm h-screen ">
      <div
        onClick={() => handleOptionClick("Dashbord")}
        className="logo ml-4  pb-10 flex items-center mt-8 text-sm cursor-pointer  "
      >
        <img className="w-14" src={logo} alt="logo" />
        <span className=" font-semibold">DigiSyndic</span>
      </div>
      <div className="options ">
        <div className="flex flex-col gap-y-4 ml-10 justify-center">
          <div
            onClick={() => handleOptionClick("Dashbord")}
            className={`flex gap-4  w-11/12 py-2 pl-4 rounded-xl items-center   cursor-pointer ${
              selectedOption === "/Dashbord" || "/" ? "bg-white  shadow-sm" : ""
            }  `}
          >
            <div
              className={` ${
                selectedOption === "/Dashbord" || "/"
                  ? "bg-DarkBlue"
                  : "bg-white"
              } p-1 rounded-lg w-6`}
            >
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_4_1854)">
                  <path
                    d="M7.66264 3.46748C7.61903 3.42575 7.56099 3.40247 7.50063 3.40247C7.44027 3.40247 7.38224 3.42575 7.33862 3.46748L1.94507 8.61992C1.92216 8.64183 1.90394 8.66816 1.8915 8.69731C1.87906 8.72647 1.87267 8.75785 1.87271 8.78955L1.87183 13.6253C1.87183 13.8739 1.9706 14.1124 2.14641 14.2882C2.32223 14.464 2.56069 14.5628 2.80933 14.5628H5.62475C5.74907 14.5628 5.8683 14.5134 5.95621 14.4255C6.04412 14.3376 6.0935 14.2184 6.0935 14.094V10.1097C6.0935 10.0475 6.1182 9.98789 6.16215 9.94393C6.2061 9.89998 6.26572 9.87529 6.32788 9.87529H8.67163C8.73379 9.87529 8.7934 9.89998 8.83736 9.94393C8.88131 9.98789 8.906 10.0475 8.906 10.1097V14.094C8.906 14.2184 8.95539 14.3376 9.0433 14.4255C9.1312 14.5134 9.25043 14.5628 9.37475 14.5628H12.189C12.4377 14.5628 12.6761 14.464 12.8519 14.2882C13.0277 14.1124 13.1265 13.8739 13.1265 13.6253V8.78955C13.1265 8.75785 13.1202 8.72647 13.1077 8.69731C13.0953 8.66816 13.0771 8.64183 13.0541 8.61992L7.66264 3.46748Z"
                    fill={` ${
                      selectedOption === "/Dashbord" || "/"
                        ? "white"
                        : "#313860"
                    }`}
                  />
                  <path
                    d="M14.3823 7.65369L12.1909 5.5572V2.37585C12.1909 2.25153 12.1415 2.13231 12.0536 2.0444C11.9656 1.95649 11.8464 1.9071 11.7221 1.9071H10.3159C10.1915 1.9071 10.0723 1.95649 9.9844 2.0444C9.89649 2.13231 9.8471 2.25153 9.8471 2.37585V3.31335L8.15023 1.69089C7.99144 1.53035 7.75531 1.43835 7.50013 1.43835C7.24583 1.43835 7.01029 1.53035 6.8515 1.69119L0.620055 7.6531C0.437829 7.82888 0.414977 8.11804 0.580797 8.30847C0.622437 8.35654 0.673422 8.39563 0.73065 8.42337C0.787878 8.4511 0.850151 8.46691 0.91368 8.46981C0.977209 8.47272 1.04066 8.46266 1.10018 8.44026C1.15971 8.41787 1.21405 8.38359 1.2599 8.33953L7.339 2.53054C7.38262 2.48882 7.44065 2.46553 7.50101 2.46553C7.56137 2.46553 7.6194 2.48882 7.66302 2.53054L13.7427 8.33953C13.8323 8.42541 13.9522 8.47228 14.0763 8.46986C14.2003 8.46745 14.3184 8.41594 14.4045 8.32663C14.5844 8.14031 14.5695 7.83269 14.3823 7.65369Z"
                    fill={` ${
                      selectedOption === "/Dashbord" || "/"
                        ? "white"
                        : "#313860"
                    }`}
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4_1854">
                    <rect
                      width="15"
                      height="15"
                      fill="white"
                      transform="translate(-0.000244141 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span
              className={`${
                selectedOption === "/Dashbord" || "/" ? "" : "text-LighGray"
              } text-sm`}
            >
              Dashbord
            </span>
          </div>

          <div
            onClick={() => handleOptionClick("Factor")}
            className={`flex gap-4  w-11/12 py-2 pl-4 rounded-xl items-center   cursor-pointer ${
              selectedOption === "/Factor" ? "bg-white  shadow-sm" : ""
            }  `}
          >
            <div
              className={` ${
                selectedOption === "/Factor" ? "bg-DarkBlue" : "bg-white"
              } p-1 rounded-lg w-6`}
            >
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_4_1849)">
                  <path
                    d="M0.937256 11.5151C0.937256 11.9503 1.11011 12.3676 1.41778 12.6752C1.72546 12.9829 2.14276 13.1558 2.57788 13.1558H12.4216C12.8567 13.1558 13.274 12.9829 13.5817 12.6752C13.8894 12.3676 14.0623 11.9503 14.0623 11.5151V7.00342H0.937256V11.5151ZM2.87085 9.28857C2.87085 9.05547 2.96345 8.83192 3.12827 8.66709C3.2931 8.50227 3.51665 8.40967 3.74975 8.40967H5.156C5.3891 8.40967 5.61266 8.50227 5.77749 8.66709C5.94231 8.83192 6.03491 9.05547 6.03491 9.28857V9.87451C6.03491 10.1076 5.94231 10.3312 5.77749 10.496C5.61266 10.6608 5.3891 10.7534 5.156 10.7534H3.74975C3.51665 10.7534 3.2931 10.6608 3.12827 10.496C2.96345 10.3312 2.87085 10.1076 2.87085 9.87451V9.28857Z"
                    fill={` ${
                      selectedOption === "/Factor" ? "white" : "#313860"
                    }`}
                  />
                  <path
                    d="M12.4216 2.84302H2.57788C2.14276 2.84302 1.72546 3.01587 1.41778 3.32355C1.11011 3.63122 0.937256 4.04852 0.937256 4.48364V5.24536H14.0623V4.48364C14.0623 4.04852 13.8894 3.63122 13.5817 3.32355C13.274 3.01587 12.8567 2.84302 12.4216 2.84302V2.84302Z"
                    fill={` ${
                      selectedOption === "/Factor" ? "white" : "#313860"
                    }`}
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4_1849">
                    <rect
                      width="15"
                      height="15"
                      fill="white"
                      transform="translate(-0.00012207 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <span
              className={`${
                selectedOption === "/Factor" ? "" : "text-LighGray"
              } text-sm`}
            >
              Factor
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;

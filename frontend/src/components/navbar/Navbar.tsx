import { useAppSelector } from "../../hooks/ReduxHooks";

function Navbar() {
  const user = useAppSelector((state) => state.user);
  console.log(user);

  return (
    <div className="w-11/12 mt-4">
      <div className="flex justify-end">
        <div className="search mr-4">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
              <svg
                className="h-3 w-3 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              id="search"
              name="search"
              className="block w-full font-thin shadow-sm border-gray-300 rounded-xl py-[8px] pl-10 pr-3 focus:outline-none text-[10px]"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="profile">
          <div className=" bg-DarkBlue w-8 h-8 rounded-full flex justify-center items-center text-white text-xs ">
            {user?.fullName && user.fullName[0].toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

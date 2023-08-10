import { FormEvent, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiJoystickAlt } from "react-icons/bi";

import { useAppContext } from "../context/app.context";

const NavBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { dispatch } = useAppContext();
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!inputRef.current?.value) return;

    dispatch({
      type: "SET_SEARCH_VALUE",
      payload: { value: inputRef.current.value },
    });
    inputRef.current.value = "";
    navigate("/");
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap flex-col items-center justify-center gap-2  md:justify-between mx-auto p-2 md:p-4">
          <Link to="/">
            <h2 className="font-lobster dark:text-white flex items-end gap-1 BiJoystickAl">
              <span className="text-3xl">Litee Play</span>
              <BiJoystickAlt size={33} className="pt-1 lg:pt-0" />
            </h2>
          </Link>

          <form onSubmit={handleSubmit}>
            <div className="flex">
              <div className="relative ">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Search icon</span>
                </div>
                <input
                  type="text"
                  id="search-navbar"
                  className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search Game..."
                  ref={inputRef}
                />
              </div>
            </div>
          </form>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

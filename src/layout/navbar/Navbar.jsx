import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className="w-full shadow">
        <div className="flex justify-between items-center mx-auto lg:max-w-6xl md:px-8">
          <div className="px-4 z-10 md:px-0 space-x-16 md:items-center md:flex">
            <div>
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <a href="javascript:void(0)">
                  <h2 className="text-2xl font-bold">Logoipsum</h2>
                </a>
                <div className="md:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}>
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-black"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                  navbar ? "block" : "hidden"
                }`}>
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                  <Link to={"/"} className=" hover:text-indigo-800">
                    <a href="javascript:void(0)">Home</a>
                  </Link>
                  <li className="hover:text-indigo-800">
                    <a href="javascript:void(0)">Blog</a>
                  </li>
                  <li className=" hover:text-indigo-800">
                    <a href="javascript:void(0)">About US</a>
                  </li>
                  <li className=" hover:text-indigo-800">
                    <a href="javascript:void(0)">Contact US</a>
                  </li>
                </ul>

                <div className="mt-3 space-y-2 md:hidden lg:hidden">
                  <a
                    href="javascript:void(0)"
                    className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800">
                    Log in
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="inline-block w-full px-4 py-2 text-center text-white bg-[#0076CE] rounded-md shadow hover:bg-[#0075cec7]">
                    Register
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden space-x-2 md:inline-block">
            <a
              href="javascript:void(0)"
              className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800">
              Log in
            </a>
            <a
              href="javascript:void(0)"
              className="px-4 py-2 text-white bg-[#0076CE] rounded-md shadow hover:bg-[#0075cec7]">
              Register
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

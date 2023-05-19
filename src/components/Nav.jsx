import React from "react";

const Nav = () => {
  return (
    <nav className="w-full bg-white border-black border-2 rounded-2xl md:py-3 md:px-16 px-7 py-2 font-semibold">
      <ul className="flex gap-x-3 items-center justify-end ">
        <li>
          <a href="/" className="">
            Contact Us
          </a>
        </li>
        <li className=" bg-amber-500 border-black border-2 px-4 rounded-lg ">
          <a href="/">Signup</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

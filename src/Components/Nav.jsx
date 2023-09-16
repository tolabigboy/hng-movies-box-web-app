import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import toggleBar from "../assets/Menu alt 4.png";
import { BiSearchAlt2 } from "react-icons/bi";
const Nav = ({ handleClickOpen, title, setTitle }) => {
  return (
    <nav className="bg text-white">
      <div className="wrapper nav-items grid gap-[1rem] items-center max-w-[80rem] p-[1.2rem] mx-auto ">
        <div>
          <img src={Logo} alt="" />
        </div>
        <form
          className="nav-form relative"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            className="w-full  bg-transparent border-2 border-white rounded-[.5rem] p-[.3rem] placeholder:text-white"
            type="text"
            placeholder="What do you want to watch?"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <button type="button">
            <BiSearchAlt2
              onClick={handleClickOpen}
              className="text-lg text-white absolute top-3 right-4 cursor-pointer"
            />
          </button>
        </form>
        <div className="signInMenu nav-signIn flex items-center justify-end">
          <div>
            <p className="mx-[1rem]">Sign in</p>
          </div>
          <div className="toggleBox">
            <img className="toggleBorder" src={toggleBar} alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

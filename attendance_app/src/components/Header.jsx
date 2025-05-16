import React from "react";
import Logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

export default function Header ({handelScroll}) {
  return (
    <div className="container py-6 flex items-center justify-between">
      <div>
        <strong>
          <img src={Logo} alt="LOGO" width="20%"/>
        </strong>
      </div>

      <nav className="text-blue-400 text-xl hidden md:block">
        <ul className="flex items-center gap-10">
          <li onClick={handelScroll} className="font-bold hover:underline">
            <a href="#about">About</a>
          </li>
          <li className="hover:underline">
            <Link to="/login">Login</Link>
          </li>
          <li className="hover:underline">
            <Link to="/signup">SignUp</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

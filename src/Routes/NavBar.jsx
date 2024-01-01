// import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-500 pt-2 p-2">
      <div>
        <Link to="/">
          <h1>Kalvium</h1>
        </Link>
      </div>
      <div>
        <Link to="/contact">Contacts</Link>
        <Link to="/form">Registration Form</Link>
      </div>
    </nav>
  );
}

export default Navbar;

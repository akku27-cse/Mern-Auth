import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="container">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to='/Login' className="nav-link active" aria-current="page">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/SignUp" className="nav-link">
              Signup
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Home;

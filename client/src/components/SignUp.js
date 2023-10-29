import React from 'react'
import { Link } from 'react-router-dom';
function SignUp() {
  return (
    <>
      <div className="container">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <Link
              to="/PatientSignUp"
              class="nav-link active"
              aria-current="page"
            >
              Patient SignUp
            </Link>
          </li>
          <li class="nav-item">
            <Link to="" class="nav-link">
              Link
            </Link>
          </li>
          <li class="nav-item">
            <Link to="" class="nav-link">
              Link
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SignUp
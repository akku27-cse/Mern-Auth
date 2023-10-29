import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
    return (
      <>
    <div className="container">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <Link to='/PatientLogin' class="nav-link active" aria-current="page">
                            Patient
                            </Link>
        </li>
        <li class="nav-item">
          <Link to='/DoctorLogin' class="nav-link">
            Doctor
          </Link>
        </li>
        <li class="nav-item">
          <Link to='/FacultyLogin' class="nav-link">
            Faculty
          </Link>
        </li>
      </ul>
            </div>
            </>
  );
}

export default Login
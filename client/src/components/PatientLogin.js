import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function PatientLogin() {
  const history = useNavigate();
 const [data, setData] = useState({ 
   email: "",
   password: "",
 });
 // const [errror, setError] = useState("");
 // const navigate = useNavigate();
 //====================handeling part====================
 const handleChange = (e) => {
   const { name, value } = e.target;
   setData({
     ...data,
     [name]: value,
   });
 };

    const sendRequest = async () => {
      const res = axios
        .post("http://localhost:2000/api/login", {
          email: data.email,
          password: data.password,
        })
        .catch((err) => console.log(err));
      const input = await res.input;
      return input;
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(data);
      //send http request
      sendRequest().then(() => history("/user"));
    };

  return (
    <>
      <div className="container">
        {console.log("User", data)}
        <form onSubmit={handleSubmit}>
          <h2>Patient Login</h2>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={data.email}
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={data.password}
              className="form-control"
              id="password"
              required
            />
          </div>

          <button type="submit" className="btn btn-danger">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default PatientLogin
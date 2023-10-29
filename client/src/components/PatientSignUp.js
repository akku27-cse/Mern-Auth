import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function PatientSignUp() {
  const history = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    add: "",
    age: "",
    phone: "",
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
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const url = "http://localhost:27/api/user";
  //     const { data: res } = await axios.post(url, data);
  //     navigate("/login");
  //     console.log(res.message);
  //   } catch (error) {
  //     if (
  //       error.response &&
  //       error.response.status >= 400 &&
  //       error.response.status <= 500
  //     ) {
  //       setError(error.response.data.message);
  //     }
  //   }
  //};

  // const signup = () => {
  //   const { firstName, lastName, add, gender, dob, phone, email, password } = data
  //   if (firstName && lastName && add && gender && dob && phone && email && password) {
  //     alert("posted");
  //     axios.post("http://localhost:4000/register", data)
  //     .then(res=>console.log(res))
  //   } else {
  //     alert("invalid input");
  //   }

  // }

  const sendRequest = async () => {
    const res = axios.post("http://localhost:2000/api/signup", {
      firstName: data.firstName,
      lastName: data.lastName,
      add: data.add,
      age: data.age,
      phone: data.phone,
      email: data.email,
      password: data.password,
    }).catch((err) => console.log(err));
    const input = await res.input;
    return input;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    //send http request
    sendRequest().then(() => history('/login'));
  };

  return (
    <>
      <div className="container">
        {console.log("User", data)}
        <form onSubmit={handleSubmit}>
          <h1>Sign UP</h1>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            value={data.firstName}
            required
            className="first_name"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            value={data.lastName}
            required
            className="first_Name"
          />
          <input
            type="text"
            name="add"
            placeholder="Address"
            onChange={handleChange}
            value={data.add}
            required
            className="first_name"
          />

          <input
            type="text"
            name="age"
            placeholder="Age"
            onChange={handleChange}
            value={data.age}
            required
            className="first_name"
          />
          <input
            type="number"
            name="phone"
            placeholder="Enter Phone Number"
            onChange={handleChange}
            value={data.phone}
            required
            className="first_name"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
            value={data.email}
            required
            className="first_name"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter PassWord"
            onChange={handleChange}
            value={data.password}
            required
            className="first_name"
          />
          <button type="submit">signup</button>
        </form>
      </div>
    </>
  );
}

export default PatientSignUp;

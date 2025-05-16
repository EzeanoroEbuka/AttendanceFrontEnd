import React, { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import Home from "./Home";
// import { FcGoogle } from "react-icons/fc";
// import { FaFacebookF } from "react-icons/fa";

export default function Register() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [secretId, setSecretId] = useState("");
  // const [departmentName, setDepartmentName] = useState("");

  // const handleFirstNameInput = (input) => {
  //   setFirstName(input.target.value)
  // }
  // const handleLastNameInput = (input) => {
  //   setLastName(input.target.value)
  // }
  // const handleSecreteIdInput = (input) => {
  //   setSecretId(input.target.value)
  // }
  // const handleDepartmentNameInput = (input) => {
  //   setDepartmentName(input.target.value)
  // }

  const initialState = {
    firstName: "",
    lastName: "",
    secretId: "",
    departmentName: "",
  };

  function reducer(state, action) {
    if (action.type === "RESET") return initialState;
    return {
      ...state,
      [action.name]: action.value,
    };
  }

  // function reducer(state, action) {
  //   return {
  //     ...state,
  //     [action.name]: action.value
  //   };
  // }

  const [formData, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({ name: e.target.name, value: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/api/v1/register/attendee", formData)
      .then((response) => {
        toast.success(response.data.message);
        dispatch({ type: "RESET" });
      })
      .catch((error) => toast.error(error.response.data))
  };

  return (
    <div className="flex items-center justify-center bg-black h-screen">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Register New Attendee
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              FirstName
            </label>
            <input
              onChange={handleChange}
              value={formData.firstName}
              type="text"
              name="firstName"
              required
              placeholder="Enter First Name"
              className="w-full text-white px-4 py-2 border border-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              LastName
            </label>
            <input
              onChange={handleChange}
              value={formData.lastName}
              type="text"
              name="lastName"
              required
              placeholder="Enter Last Name"
              className="w-full text-white px-4 py-2 border border-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Secrete Password
            </label>
            <input
              onChange={handleChange}
              value={formData.secretId}
              type="password"
              name="secretId"
              required
              placeholder="Enter Your Personal Secrete Password"
              className="w-full text-white px-4 py-2 border border-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">
              DepartmentName
            </label>
            <input
              onChange={handleChange}
              value={formData.departmentName}
              name="departmentName"
              type="text"
              required
              placeholder="Enter Your Department Name"
              className="w-full text-white px-4 py-2 border border-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center justify-around gap-5">
            <Link to='/home'
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-200" >
             
              <button type="button">Back</button>
            </Link>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-200"
            >
              Register
            </button>
          </div>
        </form>

        {/* <div className="my-6 text-center text-sm text-gray-500">or login with</div>

        <div className="flex flex-col space-y-3">
        <button className="flex items-center justify-center gap-3 w-full border py-2 rounded-xl hover:bg-gray-50 transition">
            <FcGoogle size={20} />
            <span>Continue with Google</span>
        </button>

        <button className="flex items-center justify-center gap-3 w-full border py-2 rounded-xl text-blue-600 hover:bg-gray-50 transition">
            <FaFacebookF size={20} />
            <span>Continue with Facebook</span>
        </button>
        </div> */}
      </div>
    </div>
  );
}

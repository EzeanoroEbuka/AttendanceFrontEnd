import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

// import { FcGoogle } from "react-icons/fc";
// import { FaFacebookF } from "react-icons/fa";

export default function CreateDepartment() {
  const [departmentName, setDepartmentName] = useState("");
  const [password, setPassword] = useState("");

  const handleNameInput = (textInput) => {
    setDepartmentName(textInput.target.value.trim());
  };
  const handlePasswordInput = (textInput) => {
    setPassword(textInput.target.value.trim());
  };
  const createNewDepartment = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/api/v1/create/department", {
        departmentName: departmentName,
        password: password,
      })
      .then((response) => {
        toast.success(response.data.departmentName + " Created Successfully");
        setDepartmentName("")
        setPassword("")
      })
      .catch((error) => toast.error("There was an error"));
  };

  return (
    <div className="flex items-center justify-center bg-black h-screen">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          New Department
        </h2>

        <form onSubmit={createNewDepartment} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Department Name
            </label>
            <input
              onChange={handleNameInput}
              required
              value={departmentName}
              type="text"
              placeholder="Enter New Department"
              className="w-full px-4 py-2 border text-white border-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Password
            </label>
            <input
              onChange={handlePasswordInput}
              required
              value={password}
              type="password"
              placeholder="•••••••"
              className="w-full px-4 py-2 border text-white border-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div className="flex items-center justify-around gap-5">
            <Link
              to="/home"
              className="w-full bg-cyan-600 text-white py-2 rounded-xl hover:bg-cyan-400 transition duration-200"
            >
              <button type="button">Back</button>
            </Link>

            <button
              type="submit"
              className="w-full bg-cyan-600 text-white py-2 rounded-xl hover:bg-cyan-400 transition duration-200"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

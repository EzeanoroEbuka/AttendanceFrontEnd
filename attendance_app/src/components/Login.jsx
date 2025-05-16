import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";


export default function Login() {

const [username ,setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleNameInput = (textInput) => {
    setUsername(textInput.target.value.trim());
  };
  const handlePasswordInput = (textInput) => {
    setPassword(textInput.target.value.trim());
  };
  const handleLogin = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/api/v1/auth/login", {
        username: username,
        password: password,
      })
      .then(() => {
        setUsername("")
        setPassword("")
        window.location.href='/home'
      })
      .catch(() => toast.error("There was an error"));
  };


  return (
    <div className="flex items-center justify-center bg-black h-screen">
    <div className="bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md">
    <h2 className="text-2xl font-bold mb-6 text-center text-white">Login</h2>
       
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-white mb-1">Username</label>
          <input
            type="Username"
            required
            onChange={handleNameInput}
            placeholder="Enter Username"
            className="w-full px-4 py-2 border border-white rounded-xl focus:outline-none focus:ring-2 text-white focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-1">Password</label>
          <input
            type="password"
            required
            onChange={handlePasswordInput}
            placeholder="••••••••"
            className="w-full px-4 py-2 border text-white border-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
   </div>
  )
}

import React, { useReducer } from 'react'
// import { FcGoogle } from "react-icons/fc";
// import { FaFacebookF } from "react-icons/fa";
import axios from 'axios';
import { href, Link } from 'react-router-dom';
import Login from './Login';

export default function SignUp() {

    const detail ={
        userName: "",
        password: "",
        email: ""   
    }

    const [formData , dispatch] = useReducer(reducer, detail)

    function reducer(state, action){
        if(action.type === 'RESET') return detail
        return {
            ...state,
        [action.name]: action.value,
        }
    }

    const handleChange = (e) => {
        dispatch({ name: e.target.name, value: e.target.value.trim()});
      };
    
    const handleSubmit = ((event) => {
        event.preventDefault();
        // if ((!formData.userName.trim()) || (!formData.password.trim())) {
        //     alert("All field are required");
        //     return;
        // }
        axios.post('http://localhost:8080/api/v1/auth/signup',formData)
        .then((response) => {
            alert(response.data.message) 
            dispatch({ type: "RESET" })
            window.location.href='/login'
        })
        .catch(() => alert("An error Occured"))
    })
  return (
    <div className="flex items-center justify-center bg-black h-screen">
    <div className="bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">Signup</h2>
       
      <form  onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-start  ml-3 text-sm font-medium text-white mb-1">UserName</label>
          <input
            type="text"
            required
            name='userName'
            onChange={handleChange}
            value={formData.userName}
            placeholder="Enter Unique Username"
            className="w-full px-4 py-2 border  border-white rounded-xl focus:outline-none focus:ring-2 text-white focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-start ml-3  text-sm font-medium text-white mb-1">Password</label>
          <input
            type="password"
            name='password'
            required
            onChange={handleChange}
            value={formData.password}
            placeholder="••••••••"
            className="w-full px-4 py-2 border text-white border-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-start ml-3 text-sm font-medium text-white mb-1">Email</label>
          <input
            onChange={handleChange}
            value={formData.email}
            type="email"
            name='email'
            required
            placeholder="you@example.com"
            className="w-full px-4 py-2 border border-white rounded-xl focus:outline-none focus:ring-2 text-white focus:ring-blue-500"
          />
        </div>


        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-200"
        >
          Signin
        </button>
      </form>
    </div>
   </div>
  )
}

import React from "react";
import { Link } from "react-router-dom";

export default function CreateSheet() {
  return (
    <div className="flex items-center justify-center bg-black h-screen">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          New Attendance Sheet
        </h2>

        <form /*</div>*onSubmit={createNewDepartment} */ className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Department Name
            </label>
            <input
              // onChange={}
              required
              // value={departmentName}
              type="text"
              placeholder="Enter Department"
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

            <Link
              to="/new/sheet"
              className="w-full bg-cyan-600 text-white py-2 rounded-xl hover:bg-cyan-400 transition duration-200"
            >
              <button type="submit">Create</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

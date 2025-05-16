import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LogOut, FilePlus, Edit, Trash2, UserPlus, Users } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/get/all/attendees")
      .then((response) => {
        const sortedAttendees = response.data.attendees.sort((a, b) =>
          a.firstName.localeCompare(b.firstName)
        );
        setUsers(sortedAttendees)
      })
      .catch(() => toast("Server Down"));
  }, []);

  return (
    <div className="max-h-screen flex">
      <aside className="w-64 bg-gray-900 text-white shadow-lg p-6 space-y-8">
        <h1 className="text-3xl font-extrabold text-indigo-400 border-b pb-4">
          User Dashboard
        </h1>

        <ul className="space-y-7 text-base font-medium">
          <li>
            <Link
              to="/create/sheet"
              className="flex items-center gap-3 hover:text-indigo-300 transition-colors"
            >
              <FilePlus size={20} />
              New Sheet
            </Link>
          </li>

          <li>
            <Link
              to="/update-sheet"
              className="flex items-center gap-3 hover:text-indigo-300 transition-colors"
            >
              <Edit size={20} />
              Update Sheet
            </Link>
          </li>

          <li>
            <Link
              to="/register/department"
              className="flex items-center gap-3 hover:text-indigo-300 transition-colors"
            >
              <Users size={20} />
              New Department
            </Link>
          </li>

          <li>
            <Link
              to="/register/attendee"
              className="flex items-center gap-3 hover:text-indigo-300 transition-colors"
            >
              <UserPlus size={20} />
              New Attendee
            </Link>
          </li>

          <li>
            <Link
              to="/update-attendee"
              className="flex items-center gap-3 hover:text-indigo-300 transition-colors"
            >
              <Edit size={20} />
              Update Attendee
            </Link>
          </li>

          <li>
            <Link
              to="/delete-attendee"
              className="flex items-center gap-3 hover:text-indigo-300 transition-colors"
            >
              <Trash2 size={20} />
              Delete Attendee
            </Link>
          </li>

          <li>
            <Link
              to="/logout"
              className="flex items-center gap-3 text-red-400 hover:text-red-300 transition-colors"
            >
              <LogOut size={20} />
              Logout
            </Link>
          </li>
        </ul>
      </aside>

      <div className="h-screen w-full bg-gray-800 text-white p-6 flex flex-col">
        <h1 className="text-5xl text-indigo-400 font-extrabold mb-4">
          Attendance
        </h1>

        <div className="flex-1 bg-gray-700 rounded-lg shadow-lg p-4 overflow-y-auto">
         
            <h2 className="text-2xl font-semibold mb-4 hover:text-indigo-400 underline">List of Attendees</h2>
            <div className="flex items-center justify-between text-xl font-extrabold m-5">
              <h1 className="hover:text-indigo-400">Attendee Names</h1>
              <h1 className="hover:text-indigo-400">Department</h1>
            </div>
        

          <ul className="space-y-2">
            {users?.map((attendee, index) => (
              
              <li
                key={attendee.id}
                className=" flex justify-between items-start p-5 bg-gray-600 rounded-md hover:bg-gray-800 transition text-left"
              >
                <strong style={{ marginRight: "20px" }}>{index + 1}.</strong>{" "}
                {attendee.firstName} {attendee.lastName}
                <div className="ml-auto text-right text-white">
                  {attendee.departmentName}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}



import React from "react";
import { LogOut } from "lucide-react";


export default function NewSheet() {
  return (
    <div className="h-screen w-full bg-gray-800 text-white p-6 flex flex-col">
      <h1 className="text-5xl text-indigo-400 font-extrabold mb-4">
        New DepartmentName Sheet
      </h1>
      <div className="flex-1 bg-gray-700 rounded-lg shadow-lg p-4 overflow-y-auto">
        <h2 className="text-2xl font-semibold mb-4 hover:text-indigo-400 underline">
          List of Attendees
        </h2>
        <div className="flex items-center justify-between text-xl font-extrabold m-5">
          <h1 className="hover:text-indigo-400">Attendee Names</h1>
          <h1 className="hover:text-indigo-400">Department</h1>
        </div>
      </div>

      {/* <ul className="space-y-2">
        {users.attendees?.map((attendee, index) => (
          <li
            key={attendee.id}
            className=" flex justify-between items-start p-5 bg-gray-600 rounded-md hover:bg-gray-800 transition text-left"
          >
            <strong style={{ marginRight: "20px" }}>{index + 1}.</strong>{" "}
            {attendee.firstName} {attendee.lastName}
            <div className="ml-auto text-right text-white">
              {attendee.present ? (attendee.present = "Present") : "Absent"}
            </div>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

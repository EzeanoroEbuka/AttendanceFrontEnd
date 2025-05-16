import  React from "react";
import Background from "../assets/bacground2.jpg";
import Background2 from "../assets/backgroung3.jpg";

const Footer = () => {
  return (
    <div
      className="min-h-screen bg-gray-50 py-12 px-6 lg:px-32 text-gray-800"
      id="about"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4">
          About Our Attendance System
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Revolutionizing the way communities, schools, and organizations track
          presence with ease and precision.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src={Background}
            alt="Attendance"
            className="rounded-2xl shadow-md"
          />
        </div>
        <div>
          <img
            src={Background2}
            alt="Attendance"
            className="rounded-2xl shadow-md"
          />
        </div>
      </div>

      <div className="flex items-center justify-center h-screen">
        <div className="text-center max-w-2xl">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Why Choose Our System?
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-3 text-left">
            <li>
              <strong>Real-Time Tracking:</strong> Instantly record and monitor
              attendance from any device.
            </li>
            <li>
              <strong>User-Friendly Interface:</strong> Simple, clean, and
              intuitive dashboard for all users.
            </li>
            <li>
              <strong>Cloud-Based:</strong> Access your data securely from
              anywhere at any time.
            </li>
            <li>
              <strong>Automated Reports:</strong> Generate attendance summaries,
              trends, and analytics with a click.
            </li>
            <li>
              <strong>Multi-User Support:</strong> Role-based access for
              administrators, teachers, and attendees.
            </li>
            <li>
              <strong>Seamless Integration:</strong> Works well with QR code
              scanning, biometric devices, and more.
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
        <h3 className="text-2xl font-semibold text-center text-purple-700 mb-4">
          Our Unique Edge
        </h3>
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto">
          Unlike traditional attendance systems, our solution combines speed,
          reliability, and smart automation. Whether you’re managing a school,
          event, or workplace, we provide a robust platform that minimizes
          manual effort and maximizes accuracy. Say goodbye to paper sheets and
          manual logbooks — embrace the future of attendance management!
        </p>
      </div>
    </div>
  );
}
export default Footer;

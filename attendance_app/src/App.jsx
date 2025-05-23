// import { useState } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
// import LoadingScreen from "./components/LoadingScreen";
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login'; 
import CreateDepartment from './components/CreateDepartment'
import Register from './components/RegisterAttendee'
import Home from "./components/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateSheet from "./components/CreateSheet";
import NewSheet from "./components/NewSheet";
import SignUp from "./components/SignUp";

function App() {
  // const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      {/* {!isLoading && (
        <LoadingScreen
          onComplete={() => {
            setIsLoading(true);
          }}
        />
      )} */}
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element= {<SignUp/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register/department" element={<CreateDepartment/>} />
        <Route path="/register/attendee" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create/sheet" element={<CreateSheet />} />
        <Route  path="/new/sheet" element={<NewSheet />}/>
        
        </Routes>
        <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />
    </>
  );
}

export default App;

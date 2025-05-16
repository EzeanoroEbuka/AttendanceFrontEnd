import React, { useState ,useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import LoadingScreen from "./LoadingScreen";
// import HomeImage from "../assets/coverImage.jpg";

export default function LandingPage() {
  const aboutRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);

  const handelScroll = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {!isLoading && (
        <LoadingScreen
          onComplete={() => {
            setIsLoading(true);
          }}
        />
      )}

      <div className="relative w-full h-screen object-cover bg-gray-900">
        <div className="absolute inset-0 z-10 px-9">
          <Header aboutRef={handelScroll} />
        </div>
        <div className="flex items-center justify-center h-screen">
          <div className="text-center font-extrabold text-5xl text-cyan-500">
            <h1>
              Welcome To The Best{" "}
              <span style={{ color: "skyblue" }}>Attendance System</span>
            </h1>
            <h1>
              Organize Your Community List For{" "}
              <span style={{ color: "skyblue" }}>Attendees</span>
            </h1>
          </div>
        </div>
        <div>
          <Footer ref={aboutRef} />
        </div>
      </div>
    </>
  );
}

import { useEffect, useState } from "react";


function LoadingScreen({onComplete}) {

  const [text, setText] = useState("")
  const fullText = "Welcome TO E~B Attendance System";


  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0,index));
      index++;

      if(index > fullText.length){
        clearInterval(interval)

        setTimeout(() => {
          onComplete();
        }, 1000)
      }
    }, 100);
    return () => clearInterval(interval);
  },[onComplete])

  return (
    <div className="fixed inset-0 z-50 bg-gray-900 text-blue-400 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold">
        {text} <span className="animate-blink ml-1"> | </span>
      </div>
    </div>
  );
};


export default LoadingScreen;
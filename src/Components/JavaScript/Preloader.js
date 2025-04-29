import React from "react";
import preloader from "../Photos/projectImgs/preloader.gif";
function Preloader() {
  return (
    <>
      <div className="preload bg-[#000000] flex justify-center items-center h-[100vh] h- z-50">
        <img src={preloader} className="preload max-w-full h-auto" alt="" />
      </div>
    </>
  );
}

export default Preloader;

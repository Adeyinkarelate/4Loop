import React from "react";
import coding from '../assets/coding.mp4'

const Video = () => {
  return (
    <div>
      <div className=" md:max-w-[1900px]  rounded-2xl flex justify-center items-center">
        <video
          src={coding }
          autoPlay
          muted
          loop
          playsInline
          className=" md:max-w-[1900px] object-cover "
        ></video>
    
      </div>
    </div>
  );
};

export default Video;

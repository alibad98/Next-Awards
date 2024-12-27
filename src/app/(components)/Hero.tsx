"use client";
import React, { useRef, useState } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadedVideo, setLoadedVideo] = useState(0);

  const totalVideos = 4;

  const nextVideoRef = useRef(null);

  const handleVideoClick = () => {
    setHasClicked(true);

    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handleVideoLoaded = () => {
    setLoadedVideo((prevLoadedVideo) => prevLoadedVideo + 1);
  };

  const getVideoSrc = (index: number) => {
    return `/videos/hero-${index}.mp4`;
  };
  return (
    <div className="h-dvh relative w-screen overflow-x-hidden">
      <div id="video-frame relative w-screen h-dvh overflow-hidden rounded-lg bg-blue-75 z-10">
        <div className="mask-clip-path absolute-center z-50 size-64 cursor-pointer rounded-lg ">
          <div
            className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100 
          "
            onClick={handleVideoClick}
          >
            <video
              ref={nextVideoRef}
              src={getVideoSrc(currentIndex + 1)}
              loop
              muted
              autoPlay
              id="current-video"
              className="size-64 origin-center scale-150 object-cover object-center"
              onLoadedData={handleVideoLoaded}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

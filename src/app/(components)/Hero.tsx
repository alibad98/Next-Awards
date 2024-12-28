"use client";
import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadedVideo, setLoadedVideo] = useState(0);

  const totalVideos = 4;

  const nextVideoRef = useRef(null);

  const nextVideoIndex = (currentIndex % totalVideos) + 1;

  const handleVideoClick = () => {
    setHasClicked(true);

    setCurrentIndex(nextVideoIndex);
  };

  const handleVideoLoaded = () => {
    setLoadedVideo((prevLoadedVideo) => prevLoadedVideo + 1);
  };

  const getVideoSrc = (index: number) => {
    return `/videos/hero-${index}.mp4`;
  };

  useEffect(() => {
    if (loadedVideo === totalVideos - 1) {
      setLoading(false);
    }
  }, [loadedVideo]);

  // useGSAP hook for animation
  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVideoRef.current.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(8% 0, 73% 0, 95% 91%, 0 99%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <div className="h-dvh relative w-screen overflow-x-hidden">
      {false && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}
      <div
        id="video-frame"
        className=" relative w-screen h-dvh overflow-hidden bg-blue-75 z-10"
      >
        <div>
          <div className="mask-clip-path absolute-center z-50 size-64 cursor-pointer rounded-lg ">
            <div
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in !rounded-lg hover:scale-100 hover:opacity-100 
          "
              onClick={handleVideoClick}
            >
              {/* Video Spoiler */}
              <video
                ref={nextVideoRef}
                src={getVideoSrc(nextVideoIndex)}
                loop
                muted
                autoPlay
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoLoaded}
              />
            </div>
          </div>
          {/* Primary BG Video */}
          <video
            muted
            loop
            id="next-video"
            className="absolute-center invisible absolute z-20 object-cover object-center size-64 "
            onLoadedData={handleVideoLoaded}
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
          />
          <video
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
            autoPlay
            loop
            muted
            className="absolute left-0 right-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoaded}
          />
        </div>
        <h1 className="absolute bottom-5 right-5 z-40 text-blue-75 special-font hero-heading">
          G<b>a</b>ming
        </h1>
        <div className="absolute left-0 top-0 z-40 size-full ">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              redefi<b>n</b>e
            </h1>
            <p className="mbb-5 max-w-65 font-robert-regular text-blue-100">
              {" "}
              Enter The Metagame Layer <br /> Unleash The Play Economy
            </p>
            <Button
              id="watch-trailler "
              title="Watch Trailler"
              rightIcon={<TiLocationArrow />}
              containerClass="!bg-yellow-300 flex-center gap-1"
              textColor="black"
            />
          </div>
        </div>
      </div>
      <h1 className="absolute bottom-5 right-5  text-black special-font hero-heading">
        G<b>a</b>ming
      </h1>
    </div>
  );
};

export default Hero;

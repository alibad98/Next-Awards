"use client";
import Image from "next/image";
import React from "react";
import about from "@/../public/img/about.webp";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import TitleAnimated from "./TitleAnimated";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px]">
          Welcome to gameloop
        </h2>

        <TitleAnimated
          title="disc<b>o</b>ver the world's <br />l<b>a</b>rgest shared adventure"
          containerClass="mt-5 !text-black text-center"
        />
        <div className="about-subtext">
          <p>The Game Of Games Begins Your Life, Now An Epic MMORPG</p>
          <p>GameLoop Unites Every Player From Countless Platforms</p>
        </div>
      </div>
      <div className="h-dvh w-screen " id="clip">
        <div className="mask-clip-path about-image">
          <Image
            src={about}
            alt="bg-image"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

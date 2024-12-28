import About from "@/app/(components)/About";
import Hero from "@/app/(components)/Hero";
import React from "react";

const Home = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden ">
      <Hero />
      <About />
    </main>
  );
};

export default Home;

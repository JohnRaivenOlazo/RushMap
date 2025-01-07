import React from "react";
import Typewriter from "@/components/Typewriter";

const Hero = ({session, router}) => {

  return (
    <section className="h-screen flex justify-start items-center text-white relative overflow-hidden">
      <div className="relative z-50 mx-6 lg:mx-12 -mt-28 lg:mt-0">
        <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-shadow-xl align-middle">
          RushMap{" "}
          <img
            src="/logo.png"
            alt="RushMap Logo"
            className="ml-0 lg:ml-2 inline-block w-12 h-12 lg:w-16 lg:h-16"
          />
        </p>
        <p className="text-sm sm:text-lg lg:text-xl font-medium mb-4">
          <Typewriter
            strings={[
              "Navigate rush hour with ease.",
              "Designed to guide you wherever you go.",
              "Built for students, professionals, and daily commuters.",
              "Minimal design, maximum efficiency.",
            ]}
            autoStart={true}
            loop={true}
            delay={50}
            deleteSpeed={30}
          />
        </p>
        <p className="text-sm sm:text-base lg:text-lg font-light mb-14 lg:mb-20 text-light max-w-xl">
          A <span className="text-gray-50">real-time app</span> to track
          pedestrian congestion, making navigating the city during rush hour a
          breeze.
        </p>
        {!session && (
          <p className="text-light">
            Please{" "}
            <span
              className="text-gray-50 inline-block text-sm font-semibold cursor-pointer hover:-translate-y-[0.15rem] transition-all 0.3s ease"
              onClick={() => router.push("/login")}
            >
              login
            </span>{" "}
            to get started.
          </p>
        )}
      </div>

      <div className="absolute top-0 left-0 w-full h-full z-10">
        <video
          autoPlay
          muted
          loop
          src="/hero.mp4"
          id="bg-video"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="custom-shape-divider-bottom z-20">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="shape-fill"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

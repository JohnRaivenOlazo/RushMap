import React from "react";
import Typewriter from "typewriter-effect";

const Hero = (props) => {
    const { session, router } = props;

  return (
    <section className="h-screen flex flex-row justify-start items-center text-white relative">
      <div className="relative z-50 ml-20">
        <p className="text-6xl font-extrabold tracking-tighter text-shadow-xl align-middle">
          RushMap{" "}
          <img
            src="/logo.png"
            alt="RushMap Logo"
            className="ml-0 lg:ml-2 inline-block w-12 h-12 lg:w-16 lg:h-16"
          />
        </p>
        <p className="text-lg font-medium mb-4">
          <Typewriter
            options={{
              strings: [
                "Navigate rush hour with ease.",
                "Designed to guide you wherever you go.",
                "Built for students, professionals, and daily commuters.",
                "Minimal design, maximum efficiency.",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 0,
            }}
          />
        </p>
        <p className="text-lg font-light max-w-2xl mx-auto mb-20 text-light">
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
      <div class="custom-shape-divider-bottom">
        <video
          autoPlay
          muted
          loop
          src="/hero.mp4"
          id="bg-video"
          className="z-50"
        />
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="z-30"
        >
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill" />
        </svg>
      </div>
    </section>
  );
};

export default Hero

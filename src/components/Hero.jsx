import { useState, useEffect, useMemo } from "react";
import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/react";

const Hero = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: "#030712",
      },
      fpsLimit: 40,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      particles: {
        color: { value: "#f1f1f1" },
        links: {
          color: "#1f2937",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: false,
          speed: 0.5,
          straight: false,
        },
        number: {
          density: { enable: true, area: 1080 },
          value: 200,
        },
        opacity: {
          value: { min: 0.1, max: 0.5 },
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.1,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0.5, max: 1.5 },
          random: { enable: true },
        },
      },
      detectRetina: true,
      fullScreen: {
        enable: false,
        zIndex: -1,
      },
    }),
    []
  );

  return (
    <div className="relative h-screen px-7">
      {init && (
        <Particles
          id="tsparticles"
          options={options}
          className="absolute top-0 left-0 w-full h-full -z-10"
        />
      )}
      <div className="w-full flex items-center h-full container mx-auto">
        <article className="flex flex-col text-lg text-emerald-200 gap-8">
          <p className="font-mono text-center lg:text-left text-lg lg:text-md">
            Hi, my name is
          </p>
          <div>
            <h2 className="font-sans font-bold text-emerald-500 lg:text-7xl text-5xl text-center lg:text-left">
              Camille.
            </h2>
            <h2 className="font-sans font-bold text-emerald-200 lg:text-7xl text-5xl mt-1 text-center lg:text-left">
              I bring designs to life on the web.
            </h2>
          </div>
          <p className="font-sans text-emerald-200 lg:w-[50%] lg:text-lg text-[15px] text-center lg:text-left">
            Building the web, one seamless experience at a time. I specialize in
            developing intuitive and accessible applications, ensuring that
            great design meets great performance
          </p>
          <div className="mt-2 flex justify-center lg:justify-start">
            <a
              className="font-mono text-lg border rounded-lg py-4 px-6 border-emerald-200 hover:bg-emerald-500 hover:text-gray-900"
              target="_blank"
              href="https://drive.google.com/file/d/1ZLpcJjc3mdajB0DLJyicQULC5ypQfz1z/view?usp=sharing"
            >
              Checkout my resume!
            </a>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Hero;

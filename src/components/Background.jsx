import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Background() {

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: "#0b1120",
        },
        particles: {
          number: { value: 60 },
          color: { value: "#38bdf8" },
          links: {
            enable: true,
            color: "#38bdf8",
            distance: 150,
            opacity: 0.3,
          },
          move: { enable: true, speed: 1 },
          opacity: { value: 0.5 },
          size: { value: 3 },
        },
      }}
    />
  );
}
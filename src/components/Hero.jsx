import { FaLaptopCode, FaGlobeAmericas, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        👋 Hi, I'm Ricardo León
      </motion.h1>

      <h2>💻 Software Developer | Web & Mobile Development</h2>

      <div className="hero-icons">
        <FaLaptopCode />
        <FaGlobeAmericas />
        <FaRocket />
      </div>

      <p>
        🎓 Software Engineering Graduate <br />
        🌎 Based in Mexico <br />
        🚀 Passionate about building useful applications and learning new technologies.
      </p>
    </section>
  );
}
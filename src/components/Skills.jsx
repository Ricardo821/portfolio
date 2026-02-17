import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPhp,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import { SiDotnet, SiTypescript } from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>🛠️ Technologies & Tools</h2>

      <div className="skills-icons">
        <FaReact />
        <FaNodeJs />
        <FaJava />
        <FaPhp />
        <SiDotnet />
        <SiTypescript />
        <FaDatabase />
        <FaGitAlt />
      </div>
    </section>
  );
}
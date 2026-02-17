import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Sistema de Horas Trabajadas",
      tech: "PHP + MySQL + JavaScript",
    },
    {
      title: "CRUD .NET MAUI",
      tech: "XAML + MVVM",
    },
    {
      title: "API Spring Boot",
      tech: "Java + REST API",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      {projects.map((project, i) => (
        <motion.div
          className="card"
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3>{project.title}</h3>
          <p>{project.tech}</p>
        </motion.div>
      ))}
    </section>
  );
}
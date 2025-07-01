import React, { useState } from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../lib/animations";
import { projects } from "../lib/data";
import ProjectCard from "./ProjectCard";
import Modal from "./Modal";
import { Project } from "../lib/types";

const ProjectsSection: React.FC = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  const handleCardClick = (project: Project) => {
    if (
      project.mediaType === "video" &&
      (project.mediaFormat === "youtube" || project.mediaFormat === "local")
    ) {
      setSelected(project);
    } else {
      window.open(project.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="projects" className="py-20 px-4 bg-black/20 dark:bg-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Projects I've built recently across web development, AI tools,
              finance dashboards, and creative design.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter((p) => p.mediaType !== "blog")
              .map((p, i) => (
                <ProjectCard
                  key={p.title + i}
                  project={p}
                  onClick={() => handleCardClick(p)}
                />
              ))}
          </div>
        </motion.div>
      </div>

      <Modal selected={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default ProjectsSection;

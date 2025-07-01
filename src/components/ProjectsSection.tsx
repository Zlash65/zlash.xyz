import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { containerVariants, itemVariants } from "../lib/animations";
import { projects } from "../lib/data";
import ProjectCard from "./ProjectCard";
import Modal from "./Modal";
import { Project } from "../lib/types";

const getAllCategories = (projects: Project[]) => {
  const allCategories = projects
    .filter((p) => p.mediaType !== "blog")
    .flatMap((p) => p.categories || []);

  const unique = Array.from(new Set(allCategories)).filter(
    (cat) => cat !== "Featured" && cat !== "All",
  );

  return ["Featured", ...unique, "All"];
};

const getCategoryCounts = (projects: Project[]) => {
  const counts: Record<string, number> = {};
  for (const project of projects) {
    if (project.mediaType === "blog") continue;
    for (const category of project.categories || []) {
      if (category === "Featured" || category === "All") continue;
      counts[category] = (counts[category] || 0) + 1;
    }
  }

  return counts;
};

const ProjectsSection: React.FC = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("Featured");

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

  const categories = getAllCategories(projects);
  const categoryCounts = getCategoryCounts(projects);

  const filteredProjects = projects.filter(
    (p) =>
      p.mediaType !== "blog" &&
      (selectedCategory === "All" ||
        (p.categories && p.categories.includes(selectedCategory))),
  );

  return (
    <section id="projects" className="py-20 px-4 bg-black/20 dark:bg-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-10">
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

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1 rounded-full text-sm border transition-all flex items-center gap-2 ${
                  selectedCategory === category
                    ? "bg-neon-blue text-white border-neon-blue"
                    : "bg-white/10 text-white border-white/10 hover:bg-white/20"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{category}</span>
                {category !== "Featured" &&
                  category !== "All" &&
                  categoryCounts[category] !== undefined && (
                    <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full">
                      {categoryCounts[category]}
                    </span>
                  )}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((p, i) => (
                <ProjectCard
                  key={p.title + i}
                  project={p}
                  onClick={() => handleCardClick(p)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      <Modal selected={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default ProjectsSection;

import React from "react";
import { motion } from "framer-motion";
import { getThumbnail, hoverLabels } from "../lib/utils";
import { Eye, Play, Github, ExternalLink } from "lucide-react";
import { Project } from "../lib/types";

interface Props {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<Props> = ({ project, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative group cursor-pointer"
      onClick={onClick}
    >
      <div className="bg-white/5 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-neon-blue/30 transition-all duration-300 h-full flex flex-col">
        <div className="relative mb-4 h-48 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 rounded-lg overflow-hidden">
          <img
            src={getThumbnail(project)}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).onerror = null;
              e.currentTarget.src = "/assets/images/placeholder.png";
            }}
          />
          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Eye className="text-white w-10 h-10 mb-2" />
            <span className="text-white uppercase text-sm tracking-wide">
              {hoverLabels[project.mediaType]}
            </span>
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <h3 className="text-xl font-semibold mb-3 text-neon-blue">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1 line-clamp-3">
            {project.description}
          </p>

          {project.tags && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 text-xs bg-neon-blue/20 text-neon-blue rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          <div className="mt-auto flex flex-wrap gap-2">
            {project.mediaType === "video" && (
              <motion.button
                className="flex items-center gap-1 px-3 py-2 bg-neon-blue text-white text-sm rounded-lg hover:bg-neon-blue/80 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  if (project.mediaFormat === "youtube") {
                    window.open(project.link, "_blank", "noopener,noreferrer");
                  } else {
                    onClick();
                  }
                }}
              >
                <Play size={14} />
                Watch
              </motion.button>
            )}

            {project.mediaType === "website" && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={14} />
                Live
              </motion.a>
            )}

            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-2 bg-gray-700 text-white text-sm rounded-lg hover:bg-gray-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={14} />
                Code
              </motion.a>
            )}

            {project.source && (
              <motion.a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-2 bg-neon-purple text-white text-sm rounded-lg hover:bg-neon-purple/80 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={14} />
                Source
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

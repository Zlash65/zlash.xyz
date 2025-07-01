import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../lib/animations";
import { projects } from "../lib/data";
import BlogCard from "./BlogCard";

const BlogsSection: React.FC = () => {
  return (
    <section id="blogs" className="py-20 px-4 bg-black/10 dark:bg-black/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
                Blog Posts
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Insights, how-tos, and experiments I've written about.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter((p) => p.mediaType === "blog")
              .map((p, i) => (
                <BlogCard key={p.title + i} project={p} />
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogsSection;

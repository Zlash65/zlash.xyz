import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, ExternalLink } from "lucide-react";

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="space-y-2">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block"
            >
              <div className="text-4xl mb-4">👋</div>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
                Hi, I'm Zarrar
              </span>
            </motion.h1>
          </motion.div>

          {/* Tagline */}
          <motion.div variants={itemVariants}>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-gray-600 dark:text-gray-300 leading-relaxed">
              Backend & Infrastructure Engineer
            </h2>
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mt-4 leading-relaxed max-w-3xl mx-auto">
              I simplify complex problems with clean, scalable systems.
              <br className="hidden md:block" />
              <span className="text-neon-blue font-medium">8+ years</span>{" "}
              building production-grade systems for fast-growing startups.
            </p>
          </motion.div>

          {/* Key Points */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-lg bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className="text-neon-blue font-semibold">
                  🚀 Scale Impact
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Helped scale to Sequoia-backed unicorn
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-lg bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className="text-neon-purple font-semibold">
                  💰 Transaction Volume
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Built systems processing ₹1B+ transactions
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-lg bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className="text-neon-pink font-semibold">
                  🧠 AI Explorer
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Exploring LLM agents & AI tools
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="https://drive.google.com/drive/folders/1dZLF90-VlfEzu_SrwDRT0a-ArcmP2HYh"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Resume & Cover Letter
              <ExternalLink
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.a>

            <motion.button
              onClick={scrollToAbout}
              className="px-8 py-4 border-2 border-neon-blue text-neon-blue font-semibold rounded-lg hover:bg-neon-blue hover:text-white transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
              <ArrowDown size={20} />
            </motion.button>
          </motion.div>

          {/* Current Focus */}
          <motion.div
            variants={itemVariants}
            className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-neon-blue/20 backdrop-blur-sm"
          >
            <div className="text-sm font-medium text-neon-blue mb-2">
              🔭 Currently Exploring
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              LLM agent infrastructure, AI-powered developer tools, and async
              Python workflows
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

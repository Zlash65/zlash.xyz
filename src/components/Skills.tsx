import React from "react";
import { motion } from "framer-motion";

const Skills: React.FC = () => {
  const techStack = [
    // Backend & APIs
    { name: "Python", color: "#3670A0", logo: "python" },
    { name: "FastAPI", color: "#005571", logo: "fastapi" },
    { name: "Django", color: "#092E20", logo: "django" },
    { name: "Flask", color: "#000000", logo: "flask" },
    { name: "Frappe", color: "#1f2937", logo: "frappe" },
    { name: "Node.js", color: "#339933", logo: "node-dot-js" },

    // Frontend & UI
    { name: "JavaScript", color: "#F7DF1E", logo: "javascript" },
    { name: "React", color: "#20232A", logo: "react" },
    { name: "Vue.js", color: "#35495E", logo: "vue-dot-js" },
    { name: "Tailwind CSS", color: "#38B2AC", logo: "tailwindcss" },
    { name: "HTML", color: "#E34F26", logo: "html5" },
    { name: "CSS", color: "#1572B6", logo: "css3" },

    // Databases
    { name: "PostgreSQL", color: "#316192", logo: "postgresql" },
    { name: "Redis", color: "#DC382D", logo: "redis" },
    { name: "MongoDB", color: "#47A248", logo: "mongodb" },
    { name: "MariaDB", color: "#003545", logo: "mariadb" },
    { name: "DynamoDB", color: "#4053D6", logo: "amazon-dynamodb" },
    { name: "SQLite", color: "#003B57", logo: "sqlite" },

    // DevOps & Cloud
    { name: "Terraform", color: "#7B42BC", logo: "terraform" },
    { name: "Docker", color: "#2496ED", logo: "docker" },
    { name: "AWS", color: "#FF9900", logo: "amazon-web-services" },
    { name: "Git", color: "#F05032", logo: "git" },
    { name: "GitHub Actions", color: "#2088FF", logo: "github-actions" },
    { name: "Jenkins", color: "#D24939", logo: "jenkins" },

    // Monitoring & Analytics
    { name: "Datadog", color: "#632CA6", logo: "datadog" },
    { name: "Metabase", color: "#509EE3", logo: "metabase" },
    { name: "Grafana", color: "#F46800", logo: "grafana" },
    { name: "Kibana", color: "#E8488B", logo: "kibana" },
    { name: "Prometheus", color: "#E6522C", logo: "prometheus" },

    // Development Tools
    { name: "Android Studio", color: "#3DDC84", logo: "android-studio" },
    { name: "Xcode", color: "#147EFB", logo: "xcode" },
    { name: "Bitrise", color: "#683D87", logo: "bitrise" },
    { name: "Jira", color: "#0052CC", logo: "jira" },
    { name: "Appsmith", color: "#000000", logo: "appsmith" },
    { name: "Retool", color: "#0086FF", logo: "retool" },
  ];

  const categories = [
    {
      title: "Backend & APIs",
      skills: techStack.filter((skill) =>
        [
          "Python",
          "FastAPI",
          "Django",
          "Flask",
          "Frappe",
          "Node.js",
        ].includes(skill.name)
      ),
      color: "from-neon-blue to-neon-cyan",
    },
    {
      title: "Frontend & UI",
      skills: techStack.filter((skill) =>
        [
          "JavaScript",
          "React",
          "Vue.js",
          "Tailwind CSS",
          "HTML",
          "CSS",
        ].includes(skill.name)
      ),
      color: "from-neon-purple to-neon-pink",
    },
    {
      title: "Databases",
      skills: techStack.filter((skill) =>
        [
          "PostgreSQL",
          "Redis",
          "MongoDB",
          "MariaDB",
          "DynamoDB",
          "SQLite",
        ].includes(skill.name)
      ),
      color: "from-neon-green to-neon-cyan",
    },
    {
      title: "DevOps & Cloud",
      skills: techStack.filter((skill) =>
        [
          "Terraform",
          "Docker",
          "AWS",
          "Git",
          "GitHub Actions",
          "Jenkins",
        ].includes(skill.name)
      ),
      color: "from-neon-blue to-neon-purple",
    },
    {
      title: "Monitoring & Analytics",
      skills: techStack.filter((skill) =>
        [
          "Datadog",
          "Metabase",
          "Grafana",
          "Kibana",
          "Prometheus",
        ].includes(skill.name)
      ),
      color: "from-neon-pink to-neon-purple",
    },
    {
      title: "Development Tools",
      skills: techStack.filter((skill) =>
        [
          "Android Studio",
          "Xcode",
          "Bitrise",
          "Jira",
          "Appsmith",
          "Retool",
        ].includes(skill.name)
      ),
      color: "from-neon-cyan to-neon-blue",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                Tech Stack
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Technologies and tools I use to build scalable systems
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="space-y-12">
            {categories.map((category) => (
              <motion.div key={category.title} variants={itemVariants} className="space-y-6">
                <h3
                  className={`text-2xl font-semibold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                >
                  {category.title}
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative"
                    >
                      <div className="bg-white/5 dark:bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-neon-blue/30 transition-all duration-300 text-center">
                        {/* Tech Badge */}
                        <div className="flex flex-col items-center space-y-2">
                          <div
                            className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                            style={{ backgroundColor: skill.color }}
                          >
                            {skill.name.slice(0, 2).toUpperCase()}
                          </div>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-neon-blue transition-colors">
                            {skill.name}
                          </span>
                        </div>

                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-lg" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="bg-white/5 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-4 text-neon-blue">Key Strengths</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl mb-2">🚀</div>
                  <h4 className="font-semibold text-neon-purple mb-2">Scalability</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Building systems that scale from startup to unicorn
                  </p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🔧</div>
                  <h4 className="font-semibold text-neon-blue mb-2">DevOps Excellence</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Infrastructure as Code, CI/CD, and cloud-native solutions
                  </p>
                </div>
                <div>
                  <div className="text-3xl mb-2">💡</div>
                  <h4 className="font-semibold text-neon-pink mb-2">Innovation</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Always exploring new technologies like LLM agents and AI
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

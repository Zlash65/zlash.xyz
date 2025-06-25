import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Trophy } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: "Web Design and Development",
      institution: "Humber College, ON",
      type: "Certificate of Achievement",
      gpa: "9.27 GPA",
      year: "2022",
      color: "from-neon-blue to-neon-cyan"
    },
    {
      degree: "Computer Science and Engineering",
      institution: "Gujarat Technological University, India",
      type: "Bachelor of Engineering",
      gpa: "8.87 GPA",
      year: "2013-2017",
      color: "from-neon-purple to-neon-pink"
    }
  ];

  const achievements = [
    {
      title: "2nd position - Cyber Hunt - Aahvan'14",
      icon: Trophy,
      color: "text-yellow-400"
    },
    {
      title: "6th position in Code-Hack-2b (online competition on Hackerearth)",
      icon: Award,
      color: "text-neon-blue"
    },
    {
      title: "2nd position in Exhibits'17 for last year college project",
      icon: Trophy,
      color: "text-yellow-400"
    },
    {
      title: "Participated in Smart India Hackathon 2017",
      icon: Award,
      color: "text-neon-purple"
    }
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

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                Education & Achievements
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Academic background and competitive achievements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold text-neon-blue mb-8 flex items-center gap-3">
                <GraduationCap className="text-neon-blue" />
                Education
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/5 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-neon-blue/30 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-white mb-2">
                          {edu.degree}
                        </h4>
                        <p className="text-lg text-neon-purple font-medium mb-1">
                          {edu.institution}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {edu.type}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className={`text-lg font-bold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>
                          {edu.gpa}
                        </div>
                        <div className="text-sm text-gray-400">
                          {edu.year}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold text-neon-purple mb-8 flex items-center gap-3">
                <Award className="text-neon-purple" />
                Achievements & Activities
              </h3>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="bg-white/5 dark:bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-neon-purple/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <achievement.icon className={`${achievement.color} flex-shrink-0`} size={24} />
                      <p className="text-gray-300 font-medium">
                        {achievement.title}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 rounded-2xl p-8 border border-neon-blue/20 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4 text-neon-blue">
                Ready to Connect?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                I'm always interested in discussing new opportunities, tech challenges, or just connecting with fellow developers. 
                Let's build something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="https://www.linkedin.com/in/zlash65"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Connect on LinkedIn
                </motion.a>
                <motion.a
                  href="https://github.com/Zlash65"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-neon-blue text-neon-blue font-semibold rounded-lg hover:bg-neon-blue hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
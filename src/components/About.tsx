import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Gamepad2,
  Monitor,
  Book,
  Plane,
  Smartphone,
} from "lucide-react";

const About: React.FC = () => {
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

  const hobbies = [
    {
      icon: Gamepad2,
      title: "Gaming",
      desc: "Valorant & Elder Scrolls Online",
    },
    {
      icon: Monitor,
      title: "Watching",
      desc: "Anime, K-dramas, Sci-fi & Superhero",
    },
    { icon: Book, title: "Reading", desc: "Manga, Manhwa & Light novels" },
    {
      icon: Plane,
      title: "Traveling",
      desc: "Exploring new places with my wife",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-black/20 dark:bg-black/20">
      <div className="max-w-6xl mx-auto">
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
                About Me
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Backend & infrastructure engineer who loves simplifying complex
              problems with clean, scalable systems
            </p>
          </motion.div>

          {/* Personal Story & Key Achievements */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Personal Story */}
              <div className="bg-white/5 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-semibold mb-6 text-neon-pink">
                  My Journey
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    🚀 Over the last 8+ years, I've built and maintained
                    production-grade systems for fast-growing startups – from
                    designing payroll infra that processed ₹1B+ in transactions
                    to migrating an entire company off Heroku to AWS.
                  </p>
                  <p>
                    📈 I care about developer experience, real-world
                    reliability, and continuous learning. I pick up new tools
                    quickly and constantly look for ways to improve systems and
                    team velocity.
                  </p>
                  <p>
                    🧠 Currently exploring:{" "}
                    <strong className="text-neon-blue">
                      LLM agent infra, AI-powered developer tools, async Python
                      workflows
                    </strong>
                    , and more.
                  </p>
                </div>
              </div>

              {/* Key Achievements */}
              <motion.div
                variants={itemVariants}
                className="bg-white/5 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-semibold mb-6 text-neon-purple">
                  Key Achievements
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      <strong className="text-neon-blue">
                        Scaled to Unicorn:
                      </strong>{" "}
                      Helped migrate Clipboard Health from Heroku to AWS,
                      contributing to their growth into a Sequoia-backed unicorn
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-neon-purple rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      <strong className="text-neon-purple">
                        ₹1B+ Transactions:
                      </strong>{" "}
                      Built payment infrastructure at Kredily that processed
                      over 1 billion INR in transactions
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-neon-pink rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      <strong className="text-neon-pink">
                        Performance Optimization:
                      </strong>{" "}
                      Reduced ECS deployment time from 50+ minutes to under 15
                      minutes through Docker optimizations
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-neon-cyan rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      <strong className="text-neon-cyan">
                        Cost Reduction:
                      </strong>{" "}
                      Cut infrastructure costs by 75% through Terraform
                      optimization and automation
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Information & Hobbies */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Contact Information */}
              <div className="bg-white/5 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-semibold mb-6 text-neon-blue">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="text-neon-purple" size={20} />
                    <span>Toronto, Ontario, Canada</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Smartphone className="text-neon-blue" size={20} />
                    <span>+1 647-526-2462</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-neon-blue" size={20} />
                    <span>+91 798-466-8662</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-neon-pink" size={20} />
                    <a
                      href="mailto:zarrar65@gmail.com"
                      className="hover:text-neon-pink transition-colors"
                    >
                      zarrar65@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Hobbies */}
              <div className="bg-white/5 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-semibold mb-6 text-neon-cyan">
                  🧸 Outside of Work
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  When I'm not coding, I'm usually:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {hobbies.map((hobby, index) => (
                    <motion.div
                      key={hobby.title}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <hobby.icon className="text-neon-blue" size={24} />
                      <div>
                        <div className="font-medium">{hobby.title}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {hobby.desc}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-6 italic">
                  Somewhere in the multiverse, there’s a timeline more advanced
                  than ours, free from capitalism, where I don’t have to work to
                  survive - and my anime backlog is finally complete.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-6 italic">
                  El. Psy. Congroo.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

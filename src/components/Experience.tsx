import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Chief DevOps Engineer | Data Analyst",
      company: "Trade Engage",
      location: "Remote",
      period: "September 2024 - January 2025",
      achievements: [
        "Led infrastructure automation efforts by creating and maintaining modular Terraform modules for ECS, ECR, RDS, VPC, ElastiCache, etc., published on a private registry to streamline deployment across environments.",
        "Migrated frontend hosting from Vercel to AWS S3 + CloudFront, reducing latency and significantly cutting hosting costs.",
        "Architected and deployed microservices on Amazon ECS (Fargate) with fully automated CI/CD pipelines using GitHub Actions and Docker, improving deployment speed and reliability.",
        "Refactored infrastructure into clean, reusable Infrastructure as Code (IaC) modules, boosting consistency across production and SDLC environments.",
        "Developed multiple FastAPI-based APIs in Python for analytics, third-party data ingestion, and business intelligence.",
        "Wrote Python scripts for web scraping, data enrichment, and pre-population workflows using CLAY.com, ChatGPT, and Gemini, supporting rapid market expansion in the US.",
        "Integrated Datadog for full-stack monitoring and set up custom Metabase dashboards to track KPIs and surface operational insights. Collaborated cross-functionally with Founders and Engineers to translate business needs into scalable, automated technical solutions.",
        "Created Terraform modules for Datadog monitors, SLOs, and synthetic health checks to enable consistent observability across services.",
        "Integrated full-stack monitoring and alerting into CI/CD, defining SLOs tied to key SLIs for uptime and latency.",
      ],
    },
    {
      title: "Senior Software Developer",
      company: "Clipboard Health",
      location: "Remote",
      period: "January 2021 - November 2023",
      achievements: [
        "Designed and implemented an automated testing pipeline using Jenkins and Docker, reducing SDLC lifecycle time by over 50% and enabling faster, more reliable deployments during early stage growth.",
        "Spearheaded the migration of infrastructure from Heroku and Jenkins to AWS, improving reliability, cost-efficiency, and maintainability by adopting Terraform for Infrastructure as Code (IaC) across ECS, RDS, S3, ALB, IAM, and other AWS services.",
        "Authored reusable Terraform modules and custom GitHub Actions, enabling fast, consistent, and automated deployments across SDLC and production environments.",
        "Automated CI/CD pipelines for mobile apps using GitHub Actions, Bitrise, and Runway.",
        "Reduced ECS deployment time from 50+ minutes to under 15 minutes through Docker image optimizations, parallel build strategies, and caching mechanisms.",
        "Standardized deployment processes by consolidating Jenkins pipelines into cloud-native AWS pipelines, enhancing observability and rollback reliability.",
        "Reduced infrastructure drift and change churn by over 75% ($2000+ to under $500), optimizing Terraform workflows and establishing clear guardrails for multi-environment changes.",
        "Developed internal Python-based tooling and scripts to support CI workflows, infrastructure diagnostics, and environment health checks.",
        "Monitored production systems and CI/CD workflows, ensuring uptime, resolving bottlenecks, and proactively addressing issues using tools like CloudWatch, Datadog, and custom scripts.",
        "Led the development of a reusable Datadog observability module with monitor and SLO templates adopted across microservices.",
        "Participated in on-call rotation (1 week/month) to handle incidents, triage alerts, and ensure SLA adherence.",
      ],
    },
    {
      title: "Senior Software Engineer - 2",
      company: "Kredily",
      location: "Bangalore, India",
      period: "April 2019 - December 2020",
      achievements: [
        "Developed and maintained a Django-based backend for the company's core HR and payroll platform, building APIs and core modules for user login, session management, OTP authentication, payroll processing, employee management, video conferencing, in-app chat, and a task-based reward system, enhancing overall product functionality and user experience.",
        "Developed an in-app Marketplace for financial product discovery, boosting user engagement and monetization opportunities.",
        "Engineered integrations with ICICI Bank APIs to enable seamless one-click disbursement of funds, improving the platform's financial automation capabilities.",
        "Developed a Virtual Banking System within the platform that enabled seamless fund transfers and processed transactions exceeding 1 billion INR.",
        "Implemented an in-app Chat system for intra-office communication, improving collaboration and productivity.",
        "Forked and customized the open-source Mattermost codebase to fit platform-specific needs, deployed it as a dedicated chat service, and integrated it within the app, enabling seamless in-app communication and improving intra-office collaboration and productivity.",
        "Forked and customized the open-source Jitsi codebase to meet platform-specific requirements, deployed it on a dedicated server, and integrated it within the app, enabling seamless in-app video conferencing and eliminating the need to switch to external tools, making the platform a one-stop solution for all employee related needs.",
        "Managed end-to-end deployment on AWS, configuring EC2, Elastic Load Balancers, and Lambda functions to support a high-availability infrastructure.",
        "Led production release cycles, including versioning, deployment automation, and Play Store app submissions for Android, ensuring smooth rollouts with minimal downtime.",
        "Provided after-hours technical support, pairing with users to resolve production issues and maintain service reliability.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Praktice.ai",
      location: "Bangalore, India",
      period: "February 2019 - April 2019",
      achievements: [
        "Designed structured JSON files to define chatbot conversation flows, enabling easy management of 100+ intents in Dialogflow.",
        "Built and maintained AWS Lambda functions to fetch, normalize, and process hospital data, creating a scalable, serverless API layer.",
        "Created a feature called Fluttr that made the bot smarter by using the webpage the user came from. If someone started a chat from the cardiology page, the bot would skip the usual questions and jump straight to heart-related help.",
        "Refactored and modularized hospital integration APIs for improved scalability and maintainability, significantly reducing integration time for new partners.",
        "Improved the in-house spellcheck algorithm to better handle domain-specific medical terms and typos, allowing the bot to recognize and triage even poorly spelled symptoms or conditions more effectively.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Frappe Technologies",
      location: "Mumbai, India",
      period: "July 2017 - February 2019",
      achievements: [
        "Developed core modules and new features for ERPNext and the Frappe fullstack framework using Python, JavaScript, and MySQL.",
        "Built and maintained customer-facing websites and internal tools.",
        "Collaborated with cross-functional teams—including designers, QA engineers, and product managers—as well as the broader open-source community via public forums to translate feature requests and business needs into scalable, production-ready solutions for the Frappe Framework and ERPNext.",
        "Managed Git-based code repositories and deployment workflows, contributing to efficient version control and CI practices.",
        "Participated in code reviews, debugging, and unit testing, maintaining high code quality and reducing production bugs.",
        "Demonstrated a keen eye for design and UX, ensuring that the websites and software products developed were visually appealing and user-friendly.",
        "Participated in on-call rotation and actively handled user-reported issues via GitHub and forums, aligned with early-stage SRE practices.",
      ],
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="experience" className="py-20 px-4">
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
                Experience
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              8+ years of building scalable systems across fast-growing startups
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-pink"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full border-4 border-white dark:border-space-900 z-10"></div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-8"
                      : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div className="bg-white/5 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-neon-blue/30 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-neon-blue mb-1">
                          {exp.title}
                        </h3>
                        <h4 className="text-lg font-medium text-neon-purple mb-2">
                          {exp.company}
                        </h4>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            {exp.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            {exp.period}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {exp.achievements.slice(0, 3).map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-neon-blue rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </motion.div>
                      ))}

                      {exp.achievements.length > 3 && (
                        <details className="group">
                          <summary className="cursor-pointer text-neon-blue text-sm font-medium hover:text-neon-purple transition-colors">
                            Show {exp.achievements.length - 3} more achievements
                          </summary>
                          <div className="mt-3 space-y-3">
                            {exp.achievements.slice(3).map((achievement, i) => (
                              <motion.div
                                key={i + 3}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2"
                              >
                                <div className="w-1.5 h-1.5 bg-neon-purple rounded-full mt-2 flex-shrink-0"></div>
                                <span>{achievement}</span>
                              </motion.div>
                            ))}
                          </div>
                        </details>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

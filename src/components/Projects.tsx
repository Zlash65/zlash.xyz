import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, Eye, Play } from "lucide-react";

type MediaType = "video" | "gif" | "image" | "website" | "code" | "blog";
type MediaFormat = "local" | "remote" | "youtube" | string;

interface Project {
  title: string;
  category: string;
  description: string;
  mediaType: MediaType;
  mediaFormat: MediaFormat;
  link: string;
  thumbnail?: string;
  github?: string;
  source?: string;
  tags?: string[];
}

/* ───────── project list ───────── */
const projects: Project[] = [
  {
    title: "Tumor Diagnosis",
    category: "Machine Learning",
    description:
      "ML model predicting brain-tumor location and type from MRI scans using SGD and Random Forest.",
    mediaType: "video",
    mediaFormat: "youtube",
    link: "https://youtu.be/yIQFmOheUiQ?si=1SsYdFdmcJEhbhsp",
    thumbnail: "",
    tags: ["Python", "ML", "SGD", "RFC", "Healthcare"],
  },
  {
    title:
      "Build a Gen-AI Dockerfile Generator using Amazon Bedrock + Terraform",
    category: "AI Engineering",
    description:
      "An end-to-end serverless Gen-AI tool built using AWS Bedrock, Lambda, and Terraform — generates Dockerfiles from natural language prompts.",
    mediaType: "blog",
    mediaFormat: "remote",
    link: "https://medium.com/@zlash65/build-a-gen-ai-dockerfile-generator-with-aws-bedrock-and-terraform-927f6aba0781",
    thumbnail: "",
    tags: ["Gen-AI", "AWS Bedrock", "AWS Lambda", "Terraform", "LLM"],
  },
  {
    title: "Setting up Jitsi-Meet on your Server",
    category: "DevOps",
    description:
      "Step-by-step guide to self-hosting the Jitsi video conferencing platform with minimal setup on your own server.",
    mediaType: "blog",
    mediaFormat: "remote",
    link: "https://medium.com/swlh/setting-up-jitsi-meet-on-your-server-b29ca29ef345",
    thumbnail: "",
    tags: ["Jitsi Meet", "Self-hosting", "DevOps", "Video Conferencing"],
  },
  {
    title: "React.js + Tailwind Portfolio",
    category: "Web Development",
    description:
      "Personal portfolio site built with React.js and Tailwind CSS for Humber College’s Web Design & Development course.",
    mediaType: "website",
    mediaFormat: "remote",
    link: "https://react-tailwind-portfolio-gold.vercel.app",
    thumbnail: "/assets/images/projects-react-tailwind-portfolio.png",
    github: "https://github.com/Zlash65/react-tailwind-portfolio",
    tags: ["React.js", "Tailwind CSS", "Portfolio"],
  },
  {
    title: "Next.js + Tailwind Portfolio",
    category: "Web Development",
    description:
      "Personal portfolio site built with Next.js and Tailwind CSS for Humber College’s Web Design & Development course.",
    mediaType: "website",
    mediaFormat: "remote",
    link: "https://react-nextjs-portfolio-qhrbix1uh-zlash65.vercel.app",
    thumbnail: "/assets/images/projects-next-tailwind-portfolio.png",
    github: "https://github.com/Zlash65/react-nextjs-portfolio",
    tags: ["Next.js", "Tailwind CSS", "Portfolio"],
  },
  {
    title: "Job Portal – React.js + Tailwind",
    category: "Web Development",
    description:
      "Job portal matching nurses with healthcare facilities, built on React.js and Tailwind CSS.",
    mediaType: "website",
    mediaFormat: "remote",
    link: "https://react-website-tailwind-8oek34m67-zlash65.vercel.app",
    thumbnail: "/assets/images/projects-react-tailwind-job-portal.png",
    github: "https://github.com/Zlash65/react-website-tailwind",
    tags: ["React.js", "Tailwind CSS", "Job Portal", "Healthcare"],
  },
  {
    title: "Job Portal – Next.js + Tailwind",
    category: "Web Development",
    description:
      "Job portal matching nurses with healthcare facilities, built on Next.js and Tailwind CSS.",
    mediaType: "website",
    mediaFormat: "remote",
    link: "https://health-explore-khaki.vercel.app",
    thumbnail: "/assets/images/projects-next-tailwind-job-portal.png",
    github: "https://github.com/Zlash65/health-explore",
    tags: ["Next.js", "Tailwind CSS", "Job Portal", "Healthcare"],
  },
  {
    title: "Jitsi Integration",
    category: "Integration",
    description:
      "Customized and embedded the open-source Jitsi video-conferencing platform into Kredily’s HRM product.",
    mediaType: "video",
    mediaFormat: "youtube",
    link: "https://youtu.be/qoFQYvnWsoE?si=vbPj-dZFoF87f2EL",
    thumbnail: "",
    github: "https://github.com/Zlash65?tab=repositories&q=jitsi",
    tags: ["VCall", "Open Source", "Integration", "HRM"],
  },
  {
    title: "Mattermost Integration",
    category: "Integration",
    description:
      "Forked and modified Mattermost to integrate internal chat into Kredily’s HRM product.",
    mediaType: "website",
    mediaFormat: "remote",
    link: "https://kredily.com/reach",
    thumbnail: "/assets/images/projects-mattermost-integration.png",
    github: "https://github.com/Zlash65?tab=repositories&q=mattermost",
    tags: ["Chat", "Open Source", "Integration", "HRM"],
  },
  {
    title: "Connect 4 Game",
    category: "Game Development",
    description: "Two-player Connect 4 built with vanilla JavaScript.",
    mediaType: "website",
    mediaFormat: "remote",
    link: "https://zlash65.github.io/connect-four",
    thumbnail: "/assets/images/projects-connect-four.png",
    github: "https://github.com/Zlash65/connect-four",
    tags: ["JavaScript", "Game Development"],
  },
  {
    title: "Crypto Portfolio Tracker",
    category: "Finance",
    description:
      "Frappe app aggregating exchange data, portfolio tracking, and price alerts.",
    mediaType: "code",
    mediaFormat: "remote",
    link: "https://github.com/Zlash65/Crypto",
    thumbnail: "/assets/images/projects-crypto.png",
    github: "https://github.com/Zlash65/Crypto",
    tags: ["Frappe", "Cryptocurrency", "Alerts"],
  },
  {
    title: "Itinerate",
    category: "Travel",
    description:
      "Hackathon project that builds a shortest-path itinerary for must-see spots.",
    mediaType: "video",
    mediaFormat: "youtube",
    link: "https://youtu.be/9WuvEdx4WxQ?si=WhFgnULPQUtwlglE",
    thumbnail: "",
    tags: ["Hackathon", "Travel", "Path Optimization"],
  },
  {
    title: "ShikShak",
    category: "Education",
    description:
      "AngelList-style platform connecting teachers with institutions.",
    mediaType: "code",
    mediaFormat: "remote",
    link: "https://github.com/speedforce-sih17/shikshak",
    thumbnail: "/assets/images/projects-shikshak.png",
    github: "https://github.com/speedforce-sih17/shikshak",
    tags: ["Education", "Platform", "Recruitment", "Android"],
  },
  {
    title: "11ty Marketing Site",
    category: "Static Site",
    description:
      "Responsive marketing site built with the 11ty static-site generator and Tailwind CSS.",
    mediaType: "website",
    mediaFormat: "remote",
    link: "https://eleventy-website.vercel.app",
    thumbnail: "/assets/images/projects-eleventy-tailwind-website.png",
    github: "https://github.com/Zlash65/eleventy-website",
    tags: ["11ty", "Tailwind CSS", "Responsive"],
  },
  {
    title: "Animated Brand Logo – Proton VPN",
    category: "Motion Design",
    description:
      "Proton VPN logo animation created in Adobe After Effects and exported as Lottie.",
    mediaType: "gif",
    mediaFormat: "local",
    link: "/assets/gifs/projects-proton-vpn-logo.gif",
    thumbnail: "/assets/gifs/projects-proton-vpn-logo.gif",
    source: "https://lottiefiles.com/105894-atom",
    tags: ["Motion Design", "Adobe After Effects", "Lottie"],
  },
  {
    title: "Logo Reveal – Crunchyroll",
    category: "Motion Design",
    description:
      "Crunchyroll logo reveal animation created in Adobe After Effects.",
    mediaType: "video",
    mediaFormat: "local",
    link: "/assets/videos/projects-crunchyroll-logo-reveal.mp4",
    thumbnail: "/assets/images/projects-crunchyroll-logo-reveal.png",
    tags: ["Motion Design", "Adobe After Effects"],
  },
  /*{
    title: 'Motion Design – Preproduction',
    category: 'Motion Design',
    description:
      'Short motion-graphics piece exploring pre-production concepts created in Adobe After Effects.',
    mediaType: 'video',
    mediaFormat: 'local',
    link: '/public/assets/videos/projects-motion-design-preproduction.mp4',
    thumbnail: '/public/assets/images/projects-motion-design-preproduction.png',
    tags: ['Motion Design', 'Adobe After Effects', 'Rhetoric'],
  },*/
  {
    title: "Motion Design – Kinetic Typography",
    category: "Motion Design",
    description:
      "Kinetic typography motion graphic psa created for final assignment in Adobe After Effects.",
    mediaType: "video",
    mediaFormat: "local",
    link: "/assets/videos/projects-motion-design-kinetic-typography.mp4",
    thumbnail: "/assets/images/projects-motion-design-kinetic-typography.png",
    tags: ["Motion Design", "Adobe After Effects", "Typography"],
  },
];

const hoverLabels: Record<MediaType, string> = {
  video: "watch video",
  gif: "view gif",
  image: "view image",
  website: "view live",
  code: "view code",
  blog: "read blog",
};

/* ───────── helpers ───────── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const getYouTubeId = (url: string) => {
  const m = url.match(/(?:youtube\.com.*[\?&]v=|youtu\.be\/)([\w-]{11})/);
  return m ? m[1] : "";
};

const getThumbnail = (p: Project) => {
  if (p.thumbnail) return p.thumbnail;

  if (p.mediaType === "video" && p.mediaFormat === "youtube") {
    const id = getYouTubeId(p.link);
    return id ? `https://img.youtube.com/vi/${id}/mqdefault.jpg` : "";
  }
  if (p.mediaType === "website" || p.mediaType === "blog")
    return `https://image.thum.io/get/og/${encodeURIComponent(p.link)}`;
  if (p.mediaType === "gif" || p.mediaType === "image") return p.link;
  return "/assets/images/placeholder.png";
};

/* ───────── component ───────── */
const Projects: React.FC = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);

  /* card click */
  const handleCardClick = (p: Project) => {
    // open modal for any video (local or YouTube) and for local gif/image
    if (
      (p.mediaType === "video" &&
        (p.mediaFormat === "local" || p.mediaFormat === "youtube")) ||
      ((p.mediaType === "gif" || p.mediaType === "image") &&
        p.mediaFormat === "local")
    ) {
      setSelected(p);
    } else {
      window.open(p.link, "_blank", "noopener,noreferrer");
    }
  };

  /* esc-to-close */
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  /* focus trap */
  useEffect(() => {
    if (selected) closeBtn.current?.focus();
  }, [selected]);

  const closeModal = () => setSelected(null);

  return (
    <section id="projects" className="py-20 px-4 bg-black/20 dark:bg-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {/* header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              A curated selection of my recent work across web, ML, finance, and
              motion design.
            </p>
          </motion.div>

          {/* grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <motion.div
                key={p.title + i}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer"
                onClick={() => handleCardClick(p)}
              >
                <div className="bg-white/5 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-neon-blue/30 transition-all duration-300 h-full flex flex-col">
                  {/* preview */}
                  <div className="relative mb-4 h-48 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 rounded-lg overflow-hidden">
                    <img
                      src={getThumbnail(p)}
                      alt={p.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).onerror = null;
                        e.currentTarget.src = "/assets/images/placeholder.png";
                      }}
                    />
                    <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye className="text-white w-10 h-10 mb-2" />
                      <span className="text-white uppercase text-sm tracking-wide">
                        {hoverLabels[p.mediaType]}
                      </span>
                    </div>
                  </div>

                  {/* info */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold mb-3 text-neon-blue">
                      {p.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1 line-clamp-3">
                      {p.description}
                    </p>

                    {p.tags && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-1 text-xs bg-neon-blue/20 text-neon-blue rounded-full"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* buttons */}
                    <div className="mt-auto flex flex-wrap gap-2">
                      {/* Watch */}
                      {p.mediaType === "video" && (
                        <motion.button
                          className="flex items-center gap-1 px-3 py-2 bg-neon-blue text-white text-sm rounded-lg hover:bg-neon-blue/80 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            // only open new tab here for non-local videos
                            if (p.mediaFormat === "local") {
                              setSelected(p);
                            } else {
                              window.open(
                                p.link,
                                "_blank",
                                "noopener,noreferrer",
                              );
                            }
                          }}
                        >
                          <Play size={14} />
                          Watch
                        </motion.button>
                      )}

                      {/* Live */}
                      {p.mediaType === "website" && (
                        <motion.a
                          href={p.link}
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

                      {/* Code */}
                      {p.github && (
                        <motion.a
                          href={p.github}
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

                      {/* Source */}
                      {p.source && (
                        <motion.a
                          href={p.source}
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

                      {/* Blog */}
                      {p.mediaType === "blog" && (
                        <motion.a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={14} />
                          Read
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            ref={backdropRef}
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.target === backdropRef.current && closeModal()}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <button
                ref={closeBtn}
                className="absolute top-2 right-2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 backdrop-blur"
                onClick={closeModal}
              >
                <X size={20} />
              </button>

              {/* local video */}
              {selected.mediaType === "video" &&
                selected.mediaFormat === "local" && (
                  <video
                    src={selected.link}
                    controls
                    autoPlay
                    className="w-full max-h-[80vh] rounded-lg"
                  />
                )}

              {/* YouTube iframe */}
              {selected.mediaType === "video" &&
                selected.mediaFormat === "youtube" && (
                  <iframe
                    src={`https://www.youtube.com/embed/${getYouTubeId(
                      selected.link,
                    )}?autoplay=1`}
                    title={selected.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full aspect-video max-h-[80vh] rounded-lg"
                  />
                )}

              {/* gif */}
              {selected.mediaType === "gif" && (
                <img
                  src={selected.link}
                  alt={selected.title}
                  className="w-full max-h-[80vh] object-contain rounded-lg"
                />
              )}

              {/* image */}
              {selected.mediaType === "image" && (
                <img
                  src={selected.link}
                  alt={selected.title}
                  className="w-full max-h-[80vh] object-contain rounded-lg"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

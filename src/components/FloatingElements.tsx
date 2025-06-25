import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements: React.FC = () => {
  const elements = [
    { id: 1, size: 60, delay: 0, duration: 8, color: 'from-neon-blue/20 to-neon-cyan/20' },
    { id: 2, size: 40, delay: 2, duration: 12, color: 'from-neon-purple/20 to-neon-pink/20' },
    { id: 3, size: 80, delay: 4, duration: 10, color: 'from-neon-pink/10 to-neon-purple/10' },
    { id: 4, size: 30, delay: 1, duration: 15, color: 'from-neon-cyan/20 to-neon-blue/20' },
    { id: 5, size: 50, delay: 3, duration: 9, color: 'from-neon-blue/10 to-neon-purple/10' },
    { id: 6, size: 35, delay: 5, duration: 11, color: 'from-neon-pink/20 to-neon-cyan/20' },
  ];

  const getRandomPath = () => ({
    x: [
      Math.random() * window.innerWidth,
      Math.random() * window.innerWidth,
      Math.random() * window.innerWidth,
      Math.random() * window.innerWidth,
    ],
    y: [
      Math.random() * window.innerHeight,
      Math.random() * window.innerHeight,
      Math.random() * window.innerHeight,
      Math.random() * window.innerHeight,
    ],
  });

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute rounded-full bg-gradient-to-br ${element.color} blur-xl`}
          style={{
            width: element.size,
            height: element.size,
          }}
          animate={getRandomPath()}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      ))}
      
      {/* Robot Animation */}
      <motion.div
        className="absolute top-1/4 right-10 w-16 h-16"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="relative">
          {/* Robot Head */}
          <div className="w-12 h-12 bg-gradient-to-br from-neon-blue/30 to-neon-purple/30 rounded-lg border-2 border-neon-blue/50 mx-auto">
            {/* Eyes */}
            <div className="flex justify-between pt-3 px-2">
              <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></div>
            </div>
            {/* Mouth */}
            <div className="w-6 h-1 bg-neon-blue/50 rounded-full mx-auto mt-2"></div>
          </div>
          {/* Robot Body */}
          <div className="w-8 h-10 bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 rounded border-2 border-neon-purple/40 mx-auto mt-1">
            <div className="w-2 h-2 bg-neon-pink rounded-full mx-auto mt-2 animate-pulse"></div>
          </div>
          {/* Robot Arms */}
          <div className="absolute top-6 -left-2 w-4 h-2 bg-neon-blue/30 rounded border border-neon-blue/50"></div>
          <div className="absolute top-6 -right-2 w-4 h-2 bg-neon-blue/30 rounded border border-neon-blue/50"></div>
        </div>
      </motion.div>

      {/* Spaceship Animation */}
      <motion.div
        className="absolute bottom-1/4 left-10 w-20 h-12"
        animate={{
          x: [0, 100, 200, 100, 0],
          y: [0, -10, -5, -15, 0],
          rotate: [0, 2, -2, 1, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="relative">
          {/* Spaceship Body */}
          <div className="w-16 h-6 bg-gradient-to-r from-neon-cyan/30 to-neon-blue/30 rounded-full border-2 border-neon-cyan/50 relative">
            {/* Cockpit */}
            <div className="absolute top-1 left-2 w-4 h-4 bg-neon-blue/40 rounded-full border border-neon-blue/60"></div>
            {/* Engine Glow */}
            <div className="absolute -right-2 top-1 w-6 h-4 bg-gradient-to-r from-neon-pink/60 to-transparent rounded-full blur-sm"></div>
          </div>
          {/* Wings */}
          <div className="absolute top-2 -left-1 w-3 h-2 bg-neon-purple/30 rounded border border-neon-purple/50 transform -rotate-12"></div>
          <div className="absolute bottom-2 -left-1 w-3 h-2 bg-neon-purple/30 rounded border border-neon-purple/50 transform rotate-12"></div>
        </div>
      </motion.div>

      {/* Additional Robot */}
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-12 h-12"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="relative">
          {/* Circular Robot */}
          <div className="w-12 h-12 bg-gradient-to-br from-neon-green/20 to-neon-cyan/20 rounded-full border-2 border-neon-green/40">
            {/* Center Core */}
            <div className="w-4 h-4 bg-neon-green/60 rounded-full mx-auto mt-4 animate-pulse"></div>
            {/* Orbital Elements */}
            <div className="absolute top-1 left-1 w-2 h-2 bg-neon-cyan rounded-full"></div>
            <div className="absolute top-1 right-1 w-2 h-2 bg-neon-cyan rounded-full"></div>
            <div className="absolute bottom-1 left-1 w-2 h-2 bg-neon-cyan rounded-full"></div>
            <div className="absolute bottom-1 right-1 w-2 h-2 bg-neon-cyan rounded-full"></div>
          </div>
        </div>
      </motion.div>

      {/* Flying Spaceship */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-14 h-8"
        animate={{
          x: [0, window.innerWidth - 200, 0],
          y: [0, -50, -100, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="relative">
          {/* Main Body */}
          <div className="w-10 h-4 bg-gradient-to-r from-neon-pink/30 to-neon-purple/30 rounded-full border border-neon-pink/50 relative">
            {/* Thruster */}
            <div className="absolute -left-3 top-1 w-4 h-2 bg-gradient-to-l from-neon-pink/60 to-transparent rounded-full blur-sm"></div>
          </div>
          {/* Top Fin */}
          <div className="absolute -top-1 left-3 w-4 h-3 bg-neon-purple/30 rounded border border-neon-purple/50"></div>
        </div>
      </motion.div>
      
      {/* AI-inspired geometric shapes */}
      <motion.div
        className="absolute top-20 right-20 w-16 h-16 border-2 border-neon-blue/30 rotate-45"
        animate={{
          rotate: [45, 225, 45],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute bottom-32 left-16 w-12 h-12 border-2 border-neon-purple/30 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute top-1/2 left-10 w-8 h-8 bg-gradient-to-r from-neon-pink/20 to-neon-purple/20 transform rotate-45"
        animate={{
          rotate: [45, 405],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

export default FloatingElements;
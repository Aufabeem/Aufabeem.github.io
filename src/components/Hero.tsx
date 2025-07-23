import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code, Palette, Zap } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  
  const animatedTexts = [
    "Front-End Developer",
    "UI/UX Designer", 
    "React Specialist",
    "Creative Coder"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % animatedTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const floatingIcons = [
    { icon: Code, delay: 0, x: -100, y: -50 },
    { icon: Palette, delay: 1, x: 100, y: -80 },
    { icon: Zap, delay: 2, x: -80, y: 50 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden py-8 sm:py-12 md:py-16"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-lg opacity-20"
          animate={{
            rotate: [0, 180, 360],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-12 h-12 bg-indigo-200 rounded-full opacity-20"
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating Tech Icons */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute opacity-10"
            style={{
              top: `${30 + index * 20}%`,
              left: `${20 + index * 60}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, item.x * 0.1, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 6 + item.delay,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
          >
            <item.icon size={40} className="text-blue-600" />
          </motion.div>
        ))}

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image with Enhanced Animation */}
        <motion.div
          className="relative mb-6 sm:mb-8"
          variants={itemVariants}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl opacity-30"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.img
            src="/images/aufa bima.jpeg"
            alt="Profile"
            className="relative w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full mx-auto border-[3px] sm:border-[5px] border-white shadow-2xl"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          />
        </motion.div>

        {/* Animated Greeting */}
        <motion.div
          className="mb-3 sm:mb-4"
          variants={itemVariants}
        >
          <motion.span
            className="inline-block text-xl sm:text-2xl"
            animate={{
              rotate: [0, 14, -8, 14, -4, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          >
            👋
          </motion.span>
          <span className="text-lg sm:text-xl text-gray-600 ml-2">Hello, I'm</span>
        </motion.div>

        {/* Main Name with Gradient Animation */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight px-2"
          variants={itemVariants}
        >
          <motion.span
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-size-200 bg-pos-0"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: '200% 200%',
            }}
          >
            Aufa Bima Ngahada
          </motion.span>
        </motion.h1>

        {/* Animated Role Text */}
        <motion.div
          className="h-12 sm:h-16 mb-6 sm:mb-8 flex items-center justify-center px-2"
          variants={itemVariants}
        >
          <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mr-2">I'm a </span>
          <motion.span
            key={currentText}
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {animatedTexts[currentText]}
          </motion.span>
          <motion.span
            className="text-blue-600 text-xl sm:text-2xl ml-1"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            |
          </motion.span>
        </motion.div>

        {/* Description with Typewriter Effect */}
        <motion.p
          className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto leading-relaxed px-4"
          variants={itemVariants}
        >
          I create beautiful, functional, and user-friendly digital experiences. 
          Passionate about turning ideas into reality through code and design.
        </motion.p>

        {/* Social Icons with Enhanced Animation */}
        <motion.div
          className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8 lg:mb-10"
          variants={itemVariants}
        >
          {[
            { icon: Github, href: "https://github.com/Aufabeem", color: "hover:text-gray-800" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/aufa-bima-ngahada/", color: "hover:text-blue-600" },
            { icon: Mail, href: "mailto:aufabima17@gmail.com", color: "hover:text-red-500" }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              className={`p-2 sm:p-3 bg-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-gray-700 ${social.color}`}
              whileHover={{ 
                scale: 1.1, 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <social.icon size={20} className="sm:w-6 sm:h-6" />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Buttons with Enhanced Animation */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
          variants={itemVariants}
        >
          <motion.a
            href="#projects"
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold tracking-wide shadow-lg relative overflow-hidden group text-sm sm:text-base"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative z-10">View My Work</span>
          </motion.a>
          <motion.a
            href="#contact"
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-blue-600 rounded-full font-semibold tracking-wide border-2 border-blue-200 hover:border-blue-400 shadow-lg relative overflow-hidden group text-sm sm:text-base"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative z-10">Get In Touch</span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </section>
  );
};

export default Hero;
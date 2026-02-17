import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="hero-bg h-96 flex items-center justify-center"
    >
      <div className="text-center">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold mb-4 text-white"
        >
          Добро пожаловать в мир русской музыки
        </motion.h2>
        <p className="text-lg mb-6 text-gray-200">Открой для себя лучших артистов России!</p>
        <Link to="/playlists" className="bg-risa-blue px-6 py-2 rounded-full hover:bg-blue-700 transition text-white">
          Слушать сейчас
        </Link>
      </div>
    </motion.section>
  );
};

export default Hero;

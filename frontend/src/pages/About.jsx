import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="container mx-auto py-12">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-8 text-white"
      >
        О нас
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        <p className="text-gray-300">
          Риза Творчество - это платформа для любителей русской музыки. Мы предоставляем доступ к лучшим артистам, плейлистам и альбомам.
        </p>
        <p className="mt-4 text-gray-300">
          Наша миссия - популяризация русской музыкальной культуры по всему миру с красивым и удобным интерфейсом.
        </p>
      </motion.div>
    </section>
  );
};

export default About;

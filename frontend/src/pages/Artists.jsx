import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const artists = [
  { id: 1, name: 'Дима Билан', genre: 'Поп', image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81' },
  { id: 2, name: 'Земфира', genre: 'Рок', image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a000' },
  { id: 3, name: 'Сергей Лазарев', genre: 'Поп', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4' },
  { id: 4, name: 'Полина Гагарина', genre: 'Поп', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f' },
  { id: 5, name: 'Валерий Меладзе', genre: 'Поп', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4' },
];

const Artists = () => {
  return (
    <section className="container mx-auto py-12">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-8 text-white"
      >
        Наши артисты
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {artists.map(artist => (
          <motion.div
            key={artist.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="animated-card bg-gray-800 p-4 rounded-lg shadow-lg"
          >
            <img src={artist.image} alt={artist.name} className="w-full h-48 object-cover rounded" />
            <h3 className="text-xl font-semibold mt-4 text-white">{artist.name}</h3>
            <p className="text-gray-400">{artist.genre}</p>
            <Link to={`/artist/${artist.id}`} className="mt-4 block bg-risa-blue px-4 py-2 rounded hover:bg-blue-700 transition text-center text-white">
              Подробнее
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Artists;

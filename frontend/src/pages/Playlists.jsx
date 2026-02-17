import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const playlists = [
  { id: 1, title: 'Русский поп 2025', tracks: 12, image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f' },
  { id: 2, title: 'Рок хиты', tracks: 10, image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea' },
  { id: 3, title: 'Классика рока', tracks: 15, image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4' },
  { id: 4, title: 'Танцевальный микс', tracks: 8, image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81' },
];

const Playlists = () => {
  return (
    <section className="container mx-auto py-12">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-8 text-white"
      >
        Плейлисты
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {playlists.map(playlist => (
          <motion.div
            key={playlist.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="animated-card bg-gray-800 p-4 rounded-lg shadow-lg"
          >
            <img src={playlist.image} alt={playlist.title} className="w-full h-48 object-cover rounded" />
            <h3 className="text-xl font-semibold mt-4 text-white">{playlist.title}</h3>
            <p className="text-gray-400">{playlist.tracks} треков</p>
            <Link to="#" className="mt-4 block bg-risa-blue px-4 py-2 rounded hover:bg-blue-700 transition text-center text-white">
              Слушать
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Playlists;

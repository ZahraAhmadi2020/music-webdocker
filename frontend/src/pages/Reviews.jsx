import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  { id: 1, user: 'Алексей', comment: 'Отличный сайт, нашел много новых артистов!', rating: 5 },
  { id: 2, user: 'Мария', comment: 'Плейлисты супер, слушаю каждый день!', rating: 4 },
  { id: 3, user: 'Иван', comment: 'Интерфейс удобный, но хочу больше треков.', rating: 3 },
  { id: 4, user: 'Екатерина', comment: 'Земфира тут лучшая!', rating: 5 },
];

const Reviews = () => {
  return (
    <section className="container mx-auto py-12">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-8 text-white"
      >
        Отзывы
      </motion.h2>
      <div className="space-y-6">
        {reviews.map(review => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-4 rounded-lg shadow-lg"
          >
            <h3 className="text-lg font-semibold text-white">{review.user}</h3>
            <p className="text-gray-400">{review.comment}</p>
            <p className="text-yellow-400">{'★'.repeat(review.rating)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;

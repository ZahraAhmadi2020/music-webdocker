import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const artistData = {
  1: {
    name: 'Дима Билан',
    genre: 'Поп',
    bio: 'Дима Билан - один из самых известных поп-исполнителей России, победитель Евровидения 2008. Его хиты покорили миллионы сердец.',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81',
    tracks: ['Невозможное возможно', 'На берегу неба', 'Молния'],
    albums: ['Время-река', 'Против правил', 'Не молчи'],
  },
  2: {
    name: 'Земфира',
    genre: 'Рок',
    bio: 'Земфира - культовая рок-певица, известная своими глубокими текстами и уникальным стилем.',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a000',
    tracks: ['Искала', 'Хочешь?', 'Ариведерчи'],
    albums: ['Спасибо', 'Вендетта', 'Жить в твоей голове'],
  },
  3: {
    name: 'Сергей Лазарев',
    genre: 'Поп',
    bio: 'Сергей Лазарев - популярный поп-исполнитель и участник Евровидения.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
    tracks: ['Ты одна', 'В самое сердце', 'Сдавайся'],
    albums: ['В эпицентре', 'Лазарев'],
  },
  4: {
    name: 'Полина Гагарина',
    genre: 'Поп',
    bio: 'Полина Гагарина - певица с мощным голосом, представлявшая Россию на Евровидении 2015.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f',
    tracks: ['Драмы больше нет', 'Кукушка', 'Колыбельная'],
    albums: ['Попроси у облаков', '9'],
  },
  5: {
    name: 'Валерий Меладзе',
    genre: 'Поп',
    bio: 'Валерий Меладзе - легенда российской эстрады с множеством хитов.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
    tracks: ['Сэра', 'Красиво', 'Чужая'],
    albums: ['Всё так и было', 'Последний романтик'],
  },
};

const ArtistProfile = () => {
  const { id } = useParams();
  const artist = artistData[id] || { name: 'Неизвестный артист', genre: '', bio: '', image: '', tracks: [], albums: [] };

  return (
    <section className="container mx-auto py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        <div className="flex flex-col md:flex-row items-center">
          <img src={artist.image} alt={artist.name} className="w-full md:w-1/3 h-64 object-cover rounded" />
          <div className="md:ml-6 mt-4 md:mt-0">
            <h2 className="text-3xl font-bold text-white">{artist.name}</h2>
            <p className="text-gray-400">{artist.genre}</p>
            <p className="mt-4 text-gray-300">{artist.bio}</p>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-white">Популярные треки</h3>
          <ul className="mt-4 space-y-2">
            {artist.tracks.map((track, index) => (
              <li key={index} className="text-gray-300">{track}</li>
            ))}
          </ul>
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-white">Альбомы</h3>
          <ul className="mt-4 space-y-2">
            {artist.albums.map((album, index) => (
              <li key={index} className="text-gray-300">{album}</li>
            ))}
          </ul>
        </div>
        <Link to="/artists" className="mt-6 inline-block bg-risa-blue px-4 py-2 rounded hover:bg-blue-700 transition text-white">
          Назад к артистам
        </Link>
      </motion.div>
    </section>
  );
};

export default ArtistProfile;

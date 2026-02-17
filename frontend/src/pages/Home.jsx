import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPlay, FaPause, FaHeart, FaComment, FaVideo } from 'react-icons/fa';

// تصویر پیش‌فرض برای fallback
const defaultImage = 'https://picsum.photos/300/300?random=1';

// آرایه‌های داده با لینک‌های پایدار
const singers = [
  { name: 'Дима Билан', song: 'Ночной хулиган', image: 'https://picsum.photos/300/300?random=2', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
  { name: 'Земфира', song: 'Искала', image: 'https://picsum.photos/300/300?random=3', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
  { name: 'Макс Барских', song: 'Туманы', image: 'https://picsum.photos/300/300?random=4', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
  { name: 'Полина Гагарина', song: 'Колыбельная', image: 'https://picsum.photos/300/300?random=5', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' },
  { name: 'Егор Крид', song: 'Сердцеедка', image: 'https://picsum.photos/300/300?random=6', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3' },
  { name: 'LOBODA', song: 'Твои глаза', image: 'https://picsum.photos/300/300?random=7', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3' },
  { name: 'Artik & Asti', song: 'Неделимы', image: 'https://picsum.photos/300/300?random=8', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3' },
  { name: 'Баста', song: 'Сансара', image: 'https://picsum.photos/300/300?random=9', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3' },
  { name: 'Тима Белорусских', song: 'Мокрые кроссы', image: 'https://picsum.photos/300/300?random=10', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3' },
  { name: 'Моргенштерн', song: 'Cristal & МОЁТ', image: 'https://picsum.photos/300/300?random=11', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3' },
  { name: 'Сергей Лазарев', song: 'Ты не один', image: 'https://picsum.photos/300/300?random=12', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3' },
  { name: 'Ани Лорак', song: 'Забирай рай', image: 'https://picsum.photos/300/300?random=13', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3' },
  { name: 'JONY', song: 'Комета', image: 'https://picsum.photos/300/300?random=14', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3' },
  { name: 'Нюша', song: 'Цунами', image: 'https://picsum.photos/300/300?random=15', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3' },
  { name: 'Валерий Меладзе', song: 'Свет уходящего солнца', image: 'https://picsum.photos/300/300?random=16', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3' },
  { name: 'Григорий Лепс', song: 'Рюмка водки на столе', image: 'https://picsum.photos/300/300?random=17', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
  { name: 'Ирина Аллегрова', song: 'Угонщица', image: 'https://picsum.photos/300/300?random=18', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
  { name: 'Филипп Киркоров', song: 'Снег', image: 'https://picsum.photos/300/300?random=19', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
  { name: 'Zivert', song: 'Life', image: 'https://picsum.photos/300/300?random=20', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' },
  { name: 'HammAli & Navai', song: 'Птичка', image: 'https://picsum.photos/300/300?random=21', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3' },
  { name: 'Леонид Агутин', song: 'На сиреневой луне', image: 'https://picsum.photos/300/300?random=22', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3' },
  { name: 'Винтаж', song: 'Ева', image: 'https://picsum.photos/300/300?random=23', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3' },
  { name: 'Иванушки International', song: 'Тополиный пух', image: 'https://picsum.photos/300/300?random=24', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3' },
  { name: 'Мот', song: 'Капкан', image: 'https://picsum.photos/300/300?random=25', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3' },
  { name: 'Татьяна Буланова', song: 'Мой ненаглядный', image: 'https://picsum.photos/300/300?random=26', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3' },
  { name: 'Алла Пугачёва', song: 'Миллион алых роз', image: 'https://picsum.photos/300/300?random=27', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3' },
  { name: 'Вика Цыганова', song: 'Любовь и смерть', image: 'https://picsum.photos/300/300?random=28', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3' },
  { name: 'ЛСП', song: 'Монетка', image: 'https://picsum.photos/300/300?random=29', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3' },
  { name: 'Мари Краймбрери', song: 'Мне так повезло', image: 'https://picsum.photos/300/300?random=30', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3' },
  { name: 'Вера Брежнева', song: 'Любовь спасёт мир', image: 'https://picsum.photos/300/300?random=31', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3' },
];

const artists = [
  { id: 1, name: 'Дима Билан', genre: 'Поп', image: 'https://picsum.photos/300/300?random=32' },
  { id: 2, name: 'Земфира', genre: 'Рок', image: 'https://picsum.photos/300/300?random=33' },
  { id: 3, name: 'Сергей Лазарев', genre: 'Поп', image: 'https://picsum.photos/300/300?random=34' },
  { id: 4, name: 'Полина Гагарина', genre: 'Поп', image: 'https://picsum.photos/300/300?random=35' },
];

const playlists = [
  { id: 1, title: 'Русский поп 2025', tracks: 12, image: 'https://picsum.photos/300/300?random=36' },
  { id: 2, title: 'Рок хиты', tracks: 10, image: 'https://picsum.photos/300/300?random=37' },
  { id: 3, title: 'Классика рока', tracks: 15, image: 'https://picsum.photos/300/300?random=38' },
];

const musicVideos = [
  { id: 1, title: 'Туманы', artist: 'Макс Барских', image: 'https://picsum.photos/300/300?random=39', video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
  { id: 2, title: 'Колыбельная', artist: 'Полина Гагарина', image: 'https://picsum.photos/300/300?random=40', video: 'https://www.youtube.com/watch?v=example2' },
  { id: 3, title: 'Твои глаза', artist: 'LOBODA', image: 'https://picsum.photos/300/300?random=41', video: 'https://www.youtube.com/watch?v=example3' },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingAudio, setPlayingAudio] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const audioRefs = useRef(singers.map(() => new Audio()));
  const cardsToShow = 10;
  const [likes, setLikes] = useState({
    artists: artists.reduce((acc, artist) => ({ ...acc, [artist.id]: { count: 0, liked: false } }), {}),
    playlists: playlists.reduce((acc, playlist) => ({ ...acc, [playlist.id]: { count: 0, liked: false } }), {}),
    musicVideos: musicVideos.reduce((acc, video) => ({ ...acc, [video.id]: { count: 0, liked: false } }), {}),
  });
  const [comments, setComments] = useState({
    artists: artists.reduce((acc, artist) => ({ ...acc, [artist.id]: [] }), {}),
    playlists: playlists.reduce((acc, playlist) => ({ ...acc, [playlist.id]: [] }), {}),
    musicVideos: musicVideos.reduce((acc, video) => ({ ...acc, [video.id]: [] }), {}),
  });
  const [commentInput, setCommentInput] = useState('');
  const [activeCommentId, setActiveCommentId] = useState(null);

  // لاگ آرایه‌ها برای دیباگ
  useEffect(() => {
    console.log('Singers:', singers);
    console.log('Artists:', artists);
    console.log('Playlists:', playlists);
    console.log('Music Videos:', musicVideos);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % singers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    return () => {
      audioRefs.current.forEach((audio) => {
        audio.pause();
        audio.src = '';
      });
    };
  }, []);

  const handlePlayPause = (index) => {
    const actualIndex = (currentIndex + index) % singers.length;
    console.log('Clicked card index:', index, 'Actual index:', actualIndex);
    console.log('Audio URL:', singers[actualIndex].audio);

    if (playingAudio === actualIndex) {
      audioRefs.current[actualIndex].pause();
      setPlayingAudio(null);
      setErrorMessage(null);
      console.log('Paused audio for:', singers[actualIndex].name);
    } else {
      if (playingAudio !== null) {
        audioRefs.current[playingAudio].pause();
        console.log('Paused previous audio for:', singers[playingAudio].name);
      }
      const audio = audioRefs.current[actualIndex];
      audio.src = singers[actualIndex].audio;
      console.log('Setting audio source:', audio.src);

      audio.load();
      audio.oncanplay = () => {
        console.log('Audio can play for:', singers[actualIndex].name);
        audio.play()
          .then(() => {
            setPlayingAudio(actualIndex);
            setErrorMessage(null);
            console.log('Playing audio for:', singers[actualIndex].name);
          })
          .catch((e) => {
            console.error('Audio play error for', singers[actualIndex].name, ':', e);
            setErrorMessage(`Ошибка воспроизведения: ${singers[actualIndex].name} - ${singers[actualIndex].song}`);
          });
      };
      audio.onerror = () => {
        console.error('Audio load error for', singers[actualIndex].name);
        setErrorMessage(`Ошибка загрузки: ${singers[actualIndex].audio}`);
      };
    }
  };

  const handleLike = (type, id) => {
    setLikes((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        [id]: {
          count: prev[type][id].liked ? prev[type][id].count - 1 : prev[type][id].count + 1,
          liked: !prev[type][id].liked,
        },
      },
    }));
  };

  const handleCommentSubmit = (type, id) => {
    if (commentInput.trim()) {
      setComments((prev) => ({
        ...prev,
        [type]: {
          ...prev[type],
          [id]: [...prev[type][id], commentInput],
        },
      }));
      setCommentInput('');
      setActiveCommentId(null);
    }
  };

  const getVisibleSingers = () => {
    const visible = [];
    for (let i = 0; i < cardsToShow; i++) {
      const index = (currentIndex + i) % singers.length;
      visible.push(singers[index]);
    }
    return visible;
  };

  // هندلر خطای تصویر
  const handleImageError = (e) => {
    console.error('Image load error:', e.target.src);
    e.target.src = defaultImage;
  };

  return (
    <div className="container mx-auto px-4 py-8 w-full">
      {/* هدر */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-100">Риса за Творчество</h1>
        <nav className="flex space-x-4">
          <Link to="/playlists" className="text-gray-300 hover:text-risa-blue">Плейлисты</Link>
          <Link to="/artists" className="text-gray-300 hover:text-risa-blue">Артисты</Link>
          <Link to="/news" className="text-gray-300 hover:text-risa-blue">Новости</Link>
        </nav>
      </header>

      {/* اسلایدشو */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 w-full"
      >
        <h2 className="text-2xl font-bold text-gray-100 mb-4 text-center">
          ТОП-15 по количеству оценок и рецензий за сутки
        </h2>
        <div className="w-full">
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-2 justify-center items-center">
            {getVisibleSingers().map((singer, i) => (
              <motion.div
                key={`${singer.name}-${i}`}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-md shadow-lg relative overflow-hidden animated-card"
              >
                <img
                  src={singer.image || defaultImage}
                  alt={singer.name || 'Без названия'}
                  className="w-full h-full object-cover rounded-full"
                  loading="lazy"
                  onError={handleImageError}
                />
                <button
                  onClick={() => handlePlayPause(i)}
                  className="text-risa-blue bg-white/20 p-2 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
                >
                  {playingAudio === (currentIndex + i) % singers.length ? (
                    <FaPause size={12} />
                  ) : (
                    <FaPlay size={12} />
                  )}
                </button>
                <motion.div
                  className="absolute inset-0 flex flex-col justify-between items-center bg-gray-900/80 rounded-full p-2"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-100 text-xs font-semibold text-center pt-2">{singer.name || 'Без названия'}</p>
                  <p className="text-gray-400 text-xs text-center pb-2">{singer.song || 'Без песни'}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
          {/* نمایش آهنگ در حال پخش یا خطا */}
          {playingAudio !== null && singers[playingAudio] ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="mt-4 bg-white/10 backdrop-blur-md p-2 rounded-lg text-center text-gray-100"
            >
              <p className="text-sm">
                Воспроизведение: {singers[playingAudio].name || 'Без названия'} - {singers[playingAudio].song || 'Без песни'}
              </p>
            </motion.div>
          ) : errorMessage ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="mt-4 bg-white/10 backdrop-blur-md p-2 rounded-lg text-center text-red-400"
            >
              <p className="text-sm">{errorMessage}</p>
            </motion.div>
          ) : null}
        </div>
      </motion.div>

      {/* بخش موزیک ویدیوها */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto py-12"
      >
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-100">
          Популярные музыкальные видео
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {musicVideos.map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="animated-card bg-gray-800/50 backdrop-blur-md p-4 rounded-lg shadow-lg"
            >
              <img
                src={video.image || defaultImage}
                alt={video.title || 'Без названия'}
                className="w-full h-48 object-cover rounded"
                loading="lazy"
                onError={handleImageError}
              />
              <h3 className="text-xl font-semibold mt-4 text-gray-100">{video.title || 'Без названия'}</h3>
              <p className="text-gray-400">{video.artist || 'Без исполнителя'}</p>
              <div className="flex justify-between items-center mt-2">
                <motion.button
                  onClick={() => handleLike('musicVideos', video.id)}
                  className={`flex items-center gap-1 text-gray-100 bg-white/10 backdrop-blur-md p-2 rounded-full ${likes.musicVideos[video.id].liked ? 'text-risa-blue' : ''}`}
                  whileHover={{ scale: 1.1 }}
                >
                  <FaHeart size={16} />
                  <span>{likes.musicVideos[video.id].count}</span>
                </motion.button>
                <motion.button
                  onClick={() => setActiveCommentId(activeCommentId === `video-${video.id}` ? null : `video-${video.id}`)}
                  className="flex items-center gap-1 text-gray-100 bg-white/10 backdrop-blur-md p-2 rounded-full"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaComment size={16} />
                  <span>{comments.musicVideos[video.id].length}</span>
                </motion.button>
                <a
                  href={video.video || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-100 bg-white/10 backdrop-blur-md p-2 rounded-full"
                >
                  <FaVideo size={16} />
                  <span>Смотреть</span>
                </a>
              </div>
              {activeCommentId === `video-${video.id}` && (
                <div className="mt-2">
                  <input
                    type="text"
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                    placeholder="Написать комментарий..."
                    className="w-full p-2 rounded bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:border-risa-blue"
                  />
                  <motion.button
                    onClick={() => handleCommentSubmit('musicVideos', video.id)}
                    className="mt-2 bg-risa-blue px-4 py-1 rounded text-gray-100"
                    whileHover={{ scale: 1.05 }}
                  >
                    Отправить
                  </motion.button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* هیرو */}
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
          <Link to="/playlists" className="bg-risa-blue px-6 py-2 rounded-full hover:bg-blue-700 transition">
            Слушать сейчас
          </Link>
        </div>
      </motion.section>

      {/* آرتیست‌ها */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Популярные артисты</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {artists.map(artist => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="animated-card bg-gray-800 p-4 rounded-lg shadow-lg"
            >
              <img
                src={artist.image || defaultImage}
                alt={artist.name || 'Без названия'}
                className="w-full h-48 object-cover rounded"
                loading="lazy"
                onError={handleImageError}
              />
              <h3 className="text-xl font-semibold mt-4 text-white">{artist.name || 'Без названия'}</h3>
              <p className="text-gray-400">{artist.genre || 'Без жанра'}</p>
              <div className="flex justify-between items-center mt-2">
                <motion.button
                  onClick={() => handleLike('artists', artist.id)}
                  className={`flex items-center gap-1 text-gray-100 bg-white/10 backdrop-blur-md p-2 rounded-full ${likes.artists[artist.id].liked ? 'text-risa-blue' : ''}`}
                  whileHover={{ scale: 1.1 }}
                >
                  <FaHeart size={16} />
                  <span>{likes.artists[artist.id].count}</span>
                </motion.button>
                <motion.button
                  onClick={() => setActiveCommentId(activeCommentId === `artist-${artist.id}` ? null : `artist-${artist.id}`)}
                  className="flex items-center gap-1 text-gray-100 bg-white/10 backdrop-blur-md p-2 rounded-full"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaComment size={16} />
                  <span>{comments.artists[artist.id].length}</span>
                </motion.button>
              </div>
              {activeCommentId === `artist-${artist.id}` && (
                <div className="mt-2">
                  <input
                    type="text"
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                    placeholder="Написать комментарий..."
                    className="w-full p-2 rounded bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:border-risa-blue"
                  />
                  <motion.button
                    onClick={() => handleCommentSubmit('artists', artist.id)}
                    className="mt-2 bg-risa-blue px-4 py-1 rounded text-white"
                    whileHover={{ scale: 1.05 }}
                  >
                    Отправить
                  </motion.button>
                </div>
              )}
              <Link to={`/artist/${artist.id}`} className="mt-4 block bg-risa-blue px-4 py-2 rounded hover:bg-blue-700 transition text-center text-white">
                Подробнее
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* پلی‌لیست‌ها */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Популярные плейлисты</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {playlists.map(playlist => (
            <motion.div
              key={playlist.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="animated-card bg-gray-800 p-4 rounded-lg shadow-lg"
            >
              <img
                src={playlist.image || defaultImage}
                alt={playlist.title || 'Без названия'}
                className="w-full h-48 object-cover rounded"
                loading="lazy"
                onError={handleImageError}
              />
              <h3 className="text-xl font-semibold mt-4 text-white">{playlist.title || 'Без названия'}</h3>
              <p className="text-gray-400">{playlist.tracks ? `${playlist.tracks} треков` : 'Без треков'}</p>
              <div className="flex justify-between items-center mt-2">
                <motion.button
                  onClick={() => handleLike('playlists', playlist.id)}
                  className={`flex items-center gap-1 text-gray-100 bg-white/10 backdrop-blur-md p-2 rounded-full ${likes.playlists[playlist.id].liked ? 'text-risa-blue' : ''}`}
                  whileHover={{ scale: 1.1 }}
                >
                  <FaHeart size={16} />
                  <span>{likes.playlists[playlist.id].count}</span>
                </motion.button>
                <motion.button
                  onClick={() => setActiveCommentId(activeCommentId === `playlist-${playlist.id}` ? null : `playlist-${playlist.id}`)}
                  className="flex items-center gap-1 text-gray-100 bg-white/10 backdrop-blur-md p-2 rounded-full"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaComment size={16} />
                  <span>{comments.playlists[playlist.id].length}</span>
                </motion.button>
              </div>
              {activeCommentId === `playlist-${playlist.id}` && (
                <div className="mt-2">
                  <input
                    type="text"
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                    placeholder="Написать комментарий..."
                    className="w-full p-2 rounded bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:border-risa-blue"
                  />
                  <motion.button
                    onClick={() => handleCommentSubmit('playlists', playlist.id)}
                    className="mt-2 bg-risa-blue px-4 py-1 rounded text-white"
                    whileHover={{ scale: 1.05 }}
                  >
                    Отправить
                  </motion.button>
                </div>
              )}
              <Link to="/playlists" className="mt-4 block bg-risa-blue px-4 py-2 rounded hover:bg-blue-700 transition text-center text-white">
                Слушать
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

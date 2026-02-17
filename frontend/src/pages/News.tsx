 import { motion } from 'framer-motion';

const News: React.FC = () => {
  const newsItems = [
    { id: 1, title: 'Новый альбом Димы Билана', date: '2025-06-15', content: 'Дима Билан выпустил новый альбом...' },
    { id: 2, title: 'Концерт Земфиры в Москве', date: '2025-06-10', content: 'Земфира выступит в Москве...' },
    { id: 3, title: 'Сергей Лазарев на Евровидении', date: '2025-06-05', content: 'Сергей готовится к выступлению...' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-3xl font-bold text-risa-blue mb-6">Новости</h1>
      <div className="grid gap-4">
        {newsItems.map((item) => (
          <div
            key={item.id}
            className="animated-card bg-risa-dark/50 backdrop-blur-md p-4 rounded-lg"
          >
            <h3 className="text-lg font-semibold text-gray-200">{item.title}</h3>
            <p className="text-sm text-gray-400">{item.date}</p>
            <p className="text-gray-400">{item.content}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default News;

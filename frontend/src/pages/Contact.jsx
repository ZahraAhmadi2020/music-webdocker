import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Сообщение отправлено! (Это демо)');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="container mx-auto py-12">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-8 text-white"
      >
        Контакты
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg mx-auto"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-gray-300">Имя</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 bg-gray-700 rounded text-white"
              placeholder="Ваше имя"
            />
          </div>
          <div>
            <label className="block text-gray-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 bg-gray-700 rounded text-white"
              placeholder="Ваш email"
            />
          </div>
          <div>
            <label className="block text-gray-300">Сообщение</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 bg-gray-700 rounded text-white"
              placeholder="Ваше сообщение"
            ></textarea>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-risa-blue px-4 py-2 rounded hover:bg-blue-700 transition text-white"
          >
            Отправить
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;

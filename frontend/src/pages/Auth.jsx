import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(isLogin ? 'Вход выполнен! (Демо)' : 'Регистрация выполнена! (Демо)');
    setEmail('');
    setPassword('');
    setName('');
  };

  return (
    <section className="container mx-auto py-12">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-8 text-white"
      >
        {isLogin ? 'Вход' : 'Регистрация'}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg mx-auto"
      >
        <div className="space-y-4">
          {!isLogin && (
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
          )}
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
            <label className="block text-gray-300">Пароль</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 bg-gray-700 rounded text-white"
              placeholder="Ваш пароль"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-risa-blue px-4 py-2 rounded hover:bg-blue-700 transition text-white"
          >
            {isLogin ? 'Войти' : 'Зарегистрироваться'}
          </button>
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="w-full text-risa-blue hover:underline"
          >
            {isLogin ? 'Создать аккаунт' : 'Уже есть аккаунт?'}
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Auth;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ username: '', email: '', password: '', server: '' });
  const navigate = useNavigate();

  const validate = () => {
    let isValid = true;
    const newErrors = { username: '', email: '', password: '', server: '' };

    if (username.length < 3) {
      newErrors.username = 'Имя пользователя должно быть не менее 3 символов';
      isValid = false;
    }
    if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      newErrors.email = 'Неверный формат email';
      isValid = false;
    }
    if (password.length < 6) {
      newErrors.password = 'Пароль должен быть не менее 6 символов';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post('http://localhost:8080/api/register', {
          username,
          email,
          password,
        }, { withCredentials: true });
        if (response.data.success) {
          console.log('Signup success:', response.data.message);
          navigate('/login');
        } else {
          setErrors({ ...errors, server: response.data.message || 'Ошибка регистрации' });
        }
      } catch (error) {
        console.error('Signup error:', error);
        setErrors({ ...errors, server: error.response?.data?.message || 'Ошибка сервера' });
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 flex justify-center w-full"
    >
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg w-full max-w-md border border-gray-200/20 shadow-lg">
        <h1 className="text-2xl font-bold text-gray-100 mb-6">Регистрация</h1>
        {errors.server && <p className="text-red-400 text-sm mb-4 text-center">{errors.server}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-100 mb-1">Имя пользователя</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 bg-white/10 backdrop-blur-md text-gray-100 rounded-lg border border-gray-200/20 focus:outline-none focus:ring-2 focus:ring-risa-blue"
            />
            {errors.username && <p className="text-red-400 text-sm mt-1">{errors.username}</p>}
          </div>
          <div>
            <label className="block text-gray-100 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 bg-white/10 backdrop-blur-md text-gray-100 rounded-lg border border-gray-200/20 focus:outline-none focus:ring-2 focus:ring-risa-blue"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-gray-100 mb-1">Пароль</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 bg-white/10 backdrop-blur-md text-gray-100 rounded-lg border border-gray-200/20 focus:outline-none focus:ring-2 focus:ring-risa-blue"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-2 text-gray-100 hover:text-risa-blue"
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>
            {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
          </div>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
            type="submit"
            className="w-full py-2 bg-risa-blue text-gray-100 rounded-lg border border-gray-200/20 hover:bg-risa-blue/80 shadow-lg"
          >
            Зарегистрироваться
          </motion.button>
        </form>
        <p className="text-gray-100 text-center mt-4">
          Уже есть аккаунт?{' '}
          <NavLink to="/login" className="text-risa-blue hover:underline">
            Войти
          </NavLink>
        </p>
      </div>
    </motion.div>
  );
}

export default Signup;

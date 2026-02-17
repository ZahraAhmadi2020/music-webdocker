
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function Profile() {
  const [user, setUser] = useState({ name: '', email: '' });
  const [newName, setNewName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [errors, setErrors] = useState({ name: '', password: '' });

  useEffect(() => {
    setUser({ name: 'Захра Ахмади', email: 'Zhra@example.com' });
    // axios.get("http://localhost:8080/api/user/profile", { withCredentials: true })
    //   .then((response) => setUser(response.data))
    //   .catch((error) => console.error("Profile fetch error:", error));
  }, []);

  const validate = () => {
    let isValid = true;
    const newErrors = { name: '', password: '' };

    if (newName && newName.length < 2) {
      newErrors.name = 'Имя должно быть не менее 2 символов';
      isValid = false;
    }
    if (newPassword && newPassword.length < 6) {
      newErrors.password = 'Пароль должен быть не менее 6 символов';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Update data:', { newName, newPassword });
      // axios.post("http://localhost:8080/api/user/update", { newName, newPassword }, { withCredentials: true })
      //   .then((response) => {
      //     setUser({ ...user, name: newName || user.name });
      //     setNewName('');
      //     setNewPassword('');
      //   })
      //   .catch((error) => console.error("Update error:", error));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 flex justify-center w-full"
    >
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg w-full max-w-md border border-gray-200/20 shadow-lg">
        <h1 className="text-2xl font-bold text-gray-100 mb-6">Профиль</h1>
        <div className="mb-6">
          <p className="text-gray-100"><strong>Имя:</strong> {user.name}</p>
          <p className="text-gray-100"><strong>Email:</strong> {user.email}</p>
          <p className="text-gray-100"><strong>Плейлисты:</strong> Скоро появятся!</p>
        </div>
        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block text-gray-100 mb-1">Новое имя</label>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Введите новое имя..."
              className="w-full p-2 bg-white/10 backdrop-blur-md text-gray-100 rounded-lg border border-gray-200/20 focus:outline-none focus:ring-2 focus:ring-risa-blue"
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-gray-100 mb-1">Новый пароль</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Введите новый пароль..."
              className="w-full p-2 bg-white/10 backdrop-blur-md text-gray-100 rounded-lg border border-gray-200/20 focus:outline-none focus:ring-2 focus:ring-risa-blue"
            />
            {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
          </div>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
            type="submit"
            className="w-full py-2 bg-risa-blue text-gray-100 rounded-lg border border-gray-200/20 hover:bg-risa-blue/80 shadow-lg"
          >
            Обновить профиль
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}

export default Profile;


import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { FaSearch, FaSignInAlt, FaSignOutAlt, FaUserPlus } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const scaleX = useSpring(scrollY, { stiffness: 100, damping: 30 });
  const opacity = useTransform(scrollY, [0, 200], [0.6, 0.9]); // فقط opacity رو انیمیت می‌کنیم

  useEffect(() => {
    // موقتاً کامنت شده برای تست
    // axios.get("http://localhost:8080/api/user/check-auth", { withCredentials: true })
    //   .then((response) => setIsLoggedIn(response.data.authenticated))
    //   .catch(() => setIsLoggedIn(false));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchQuery}`);
  };

  const handleLogout = () => {
    axios.post("http://localhost:8080/api/logout", {}, { withCredentials: true })
      .then(() => {
        setIsLoggedIn(false);
        navigate("/login");
      })
      .catch((error) => console.error("Logout error:", error));
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-[80]">
      <motion.div
        className="absolute inset-0 bg-white/10 backdrop-blur-md border-b border-gray-200/20 shadow-lg"
        style={{ opacity }} // فقط opacity با اسکرول تغییر می‌کنه
      />
      <motion.div
        className="absolute h-1 bg-gradient-to-r from-risa-blue via-white to-purple-500 origin-left"
        style={{ scaleX }}
        animate={{ x: ["0%", "100%", "0%"], transition: { repeat: Infinity, duration: 3, ease: "linear" } }}
      />
      <div className="relative flex items-center justify-between p-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-gray-100 text-2xl font-bold"
        >
          <NavLink to="/">Music Vibes</NavLink>
        </motion.div>
        <form onSubmit={handleSearch} className="flex-1 mx-4 max-w-md">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Поиск песен..."
              className="w-full p-2 bg-white/10 backdrop-blur-md text-black-800 rounded-lg border border-gray-200/20 focus:outline-none focus:ring-2 focus:ring-risa-blue shadow-lg"
            />
            <button type="submit" className="absolute right-2 top-2 text-risa-blue">
              <FaSearch />
            </button>
          </div>
        </form>
        <div className="flex space-x-4">
          {isLoggedIn ? (
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
              className="px-4 py-2 bg-white/10 backdrop-blur-md text-gray-100 rounded-lg border border-gray-200/20 flex items-center space-x-2 hover:bg-risa-blue/20 shadow-lg"
              onClick={handleLogout}
            >
              <FaSignOutAlt />
              <span>Выйти</span>
            </motion.button>
          ) : (
            <>
              <NavLink to="/login">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
                  className="px-4 py-2 bg-white/10 backdrop-blur-md text-gray-100 rounded-lg border border-gray-200/20 flex items-center space-x-2 hover:bg-risa-blue/20 shadow-lg"
                >
                  <FaSignInAlt />
                  <span>Войти</span>
                </motion.button>
              </NavLink>
              <NavLink to="/signup">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
                  className="px-4 py-2 bg-white/10 backdrop-blur-md text-light rounded-lg border border-gray-200/20 flex items-center space-x-2 hover:bg-risa-blue/20 shadow-lg"
                >
                  <FaUserPlus />
                  <span>Регистрация</span>
                </motion.button>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;

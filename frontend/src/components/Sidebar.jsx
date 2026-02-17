
import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes, FaHome, FaChartBar, FaList, FaNewspaper, FaEnvelope, FaInfoCircle, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarVariants = {
    open: { width: 256, transition: { type: "spring", stiffness: 300, damping: 30 } },
    closed: { width: 64, transition: { type: "spring", stiffness: 300, damping: 30 } },
  };

  const textVariants = {
    open: { opacity: 1, x: 0, transition: { delay: 0.2 } },
    closed: { opacity: 0, x: -20 },
  };

  const navLinks = [
    { to: "/", label: "Главная", icon: <FaHome /> },
    { to: "/rankings", label: "Рейтинги", icon: <FaChartBar /> },
    { to: "/playlists", label: "Плейлисты", icon: <FaList /> },
    { to: "/news", label: "Новости", icon: <FaNewspaper /> },
    { to: "/contact", label: "Контакты", icon: <FaEnvelope /> },
    { to: "/about", label: "О нас", icon: <FaInfoCircle /> },
    { to: "/profile", label: "Профиль", icon: <FaUser /> },
  ];

  console.log("Sidebar rendering, isOpen:", isSidebarOpen); // برای دیباگ

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 left-4 z-[100] text-gray-100 bg-white/10 backdrop-blur-md p-2 rounded-full border border-gray-200/20 shadow-lg"
      >
        {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </motion.button>
      <motion.nav
        className="fixed top-0 left-0 h-screen bg-white/10 backdrop-blur-md p-4 z-[90] border-r border-gray-200/20 shadow-lg overflow-hidden"
        variants={sidebarVariants}
        initial="closed"
        animate={isSidebarOpen ? "open" : "closed"}
      >
        <motion.div
          className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-risa-blue via-white to-purple-500"
          animate={{ y: ["0%", "100%", "0%"], transition: { repeat: Infinity, duration: 2, ease: "linear" } }}
        />
        <ul className="space-y-4 mt-16">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center space-x-4 text-gray-100 hover:text-risa-blue text-lg font-medium p-2 rounded-md ${
                    isActive ? "text-risa-blue bg-white/10 shadow-md" : ""
                  }`
                }
                onClick={() => setIsSidebarOpen(false)}
              >
                <span className="text-2xl">{link.icon}</span>
                <motion.span variants={textVariants} animate={isSidebarOpen ? "open" : "closed"} className="whitespace-nowrap">
                  {link.label}
                </motion.span>
              </NavLink>
            </li>
          ))}
        </ul>
      </motion.nav>
    </>
  );
}

export default Sidebar;

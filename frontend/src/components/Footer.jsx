 
import { motion } from 'framer-motion';
import { FaWhatsapp, FaTelegramPlane, FaInstagram, FaVk, FaPhoneAlt } from 'react-icons/fa';

function Footer() {
  const socialLinks = [
    { name: 'WhatsApp', icon: <FaWhatsapp />, href: 'https://wa.me/1234567890', color: 'text-green-500' },
    { name: 'Telegram', icon: <FaTelegramPlane />, href: 'https://t.me/yourchannel', color: 'text-blue-200' },
    { name: 'Instagram', icon: <FaInstagram />, href: 'https://instagram.com/yourprofile', color: 'text-pink-600' },
    { name: 'VK', icon: <FaVk />, href: 'https://vk.com/yourpage', color: 'text-blue-400' },
    { name: 'Contact', icon: <FaPhoneAlt />, href: 'tel:+1234567890', color: 'text-risa-blue' },
  ];

  return (
    <footer className="bg-risa-dark/80 backdrop-blur-md py-6 mt-8 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gray-200 text-center md:text-left mb-4 md:mb-0"
          >
            <p className="text-lg font-semibold">Music Vibes</p>
            <p className="text-sm">© 2025 Все права защищены</p>
          </motion.div>
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className={`${link.color} text-2xl`}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rankings from './pages/Rankings';
import Playlists from './pages/Playlists';
import News from './pages/News';
import Contact from './pages/Contact';
import About from './pages/About';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SupportChat from './components/SupportChat';

function App() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Sidebar />
      <div className="flex flex-col w-full min-h-screen">
        <Header />
        <main className="flex-1 pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rankings" element={<Rankings />} />
            <Route path="/playlists" element={<Playlists />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <SupportChat />
    </div>
  );
}

export default App;

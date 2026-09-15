import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';

import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

import HomePage from './Pages/HomePage.jsx';
import Features from './Pages/Features.jsx';
import Enterprise from './Pages/Enterprise.jsx';
import About from './Pages/About.jsx';
import Pricing from './Pages/Pricing.jsx';
import NotFound from './Pages/NotFound.jsx';
import Authentication from './Pages/Authentication.jsx';
import HomeComponent from './Pages/home.jsx';
import History from './Pages/history.jsx';

import { AuthProvider } from './Context/AuthContext.jsx';
import VideoMeetComponent from './Pages/videomeet.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>


      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/home" element={<HomeComponent />} />
        <Route path="/history" element={<History />} />
        <Route path="/:url" element={<VideoMeetComponent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />

    </AuthProvider>
  </BrowserRouter>
);
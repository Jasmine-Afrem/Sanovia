import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import DoctorDetail from './pages/DoctorDetail/DoctorDetail';
import FindDoctor from './pages/FindDoctor/FindDoctor';
import MobileApp from './pages/MobileApp/MobileApp';
import About from './pages/About/About';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/find-doctor" element={<FindDoctor />} />
            <Route path="/find-a-doctor/:doctorId" element={<DoctorDetail />} />
            <Route path="/mobile-app" element={<MobileApp />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
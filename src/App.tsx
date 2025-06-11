import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Info from './components/Info/Info';
import Footer from './components/Footer/Footer';
import './styles/effects.css';

import healthImage from './assets/healthImage.jpeg';
import downloadAppImg from './assets/downloadAppImg.png';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Info
          title="Leading healthcare providers"
          description="Sanovia provides progressive, and affordable healthcare..."
          image={healthImage}
          imageLeft={true}
        />
        <Info
          title="Download our mobile app"
          description="Our dedicated patient engagement app and web portal allow you..."
          image={downloadAppImg}
          imageLeft={false}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
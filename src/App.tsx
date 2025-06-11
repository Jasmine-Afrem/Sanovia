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
          description="Sanovia provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it's not just work. We take pride in the solutions we deliver."
          image={healthImage}
          imageLeft={true}
        />
        <Info
          title="Download our mobile app"
          description="Get the best healthcare experience right in your pocket! Our dedicated patient engagement app allows you to book appointments, track your health records, receive reminders, and connect with doctors - all in one place. Download now and take control of your healthcare journey."
          image={downloadAppImg}
          imageLeft={false}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
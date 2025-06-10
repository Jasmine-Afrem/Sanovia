import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import InfoSection from './components/InfoSection/InfoSection';
import Footer from './components/Footer/Footer';

import healthImage from './assets/healthImage.jpeg';
import downloadAppImg from './assets/downloadAppImg.png';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero/>
        <Services/>
        <InfoSection
          title="Leading healthcare providers"
          description="Sanovia provides progressive, and affordable healthcare..."
          imageUrl={healthImage}
          imageOnLeft={true}
          buttonText="Learn more"
        />
        <InfoSection
          title="Download our mobile app"
          description="Our dedicated patient engagement app and web portal allow you..."
          imageUrl={downloadAppImg}
          imageOnLeft={false}
          buttonText="Download"
        />
      </main>
      <Footer/>
    </div>
  );
};

export default App;
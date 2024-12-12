import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from "./Component/Pages/Navbar/Navbar";
import LandingPage from './Component/Pages/LandingPage/LandingPage';
import Marque from './Component/Pages/Marque/Marque';
import About from './Component/Pages/About/About';
import Eyes from './Component/Pages/Eyes/Eyes';
import Featured from './Component/Pages/Featured/Featured';
import WorkCards from './Component/Pages/WorkCards/WorkCards';
import Footer from './Component/Pages/Footer/Footer';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Featured02 from './Component/Pages/Featured/Featured02';
import Featured03 from './Component/Pages/Featured/Featured03';

const App = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('.main-container'),
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-zinc-800 main-container">
      <Router>
        <Navbar />
        <LandingPage />
        <Marque />
        <About />
        <Eyes />
        <Featured />
        <Featured02></Featured02>
        <Featured03></Featured03>
        <WorkCards />
        <Footer />
      </Router>
    </div>
  );
};

export default App;

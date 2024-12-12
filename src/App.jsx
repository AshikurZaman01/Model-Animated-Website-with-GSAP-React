import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./Component/Pages/Navbar/Navbar"
import LandingPage from './Component/Pages/LandingPage/LandingPage';
import Marque from './Component/Pages/Marque/Marque';
import About from './Component/Pages/About/About';
import Eyes from './Component/Pages/Eyes/Eyes';
import Featured from './Component/Pages/Featured/Featured';
import WorkCards from './Component/Pages/WorkCards/WorkCards';
import Footer from './Component/Pages/Footer/Footer';

const App = () => {
  return (

    <div className='min-h-screen bg-zinc-800'>
      <Router>

        <Navbar></Navbar>

        <LandingPage></LandingPage>

        <Marque></Marque>

        <About></About>

        <Eyes></Eyes>

        <Featured></Featured>

        <WorkCards></WorkCards>

        <Footer></Footer>

      </Router>
    </div>
  )
}

export default App
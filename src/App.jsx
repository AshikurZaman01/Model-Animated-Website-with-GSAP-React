import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./Component/Pages/Navbar/Navbar"
import LandingPage from './Component/Pages/LandingPage/LandingPage';
import Marque from './Component/Pages/Marque/Marque';
import About from './Component/Pages/About/About';

const App = () => {
  return (

    <div className='min-h-screen bg-zinc-800'>
      <Router>

        <Navbar></Navbar>

        <LandingPage></LandingPage>

        <Marque></Marque>

        <About></About>

      </Router>
    </div>
  )
}

export default App
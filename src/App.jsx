import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./Component/Pages/Navbar/Navbar"
import LandingPage from './Component/Pages/LandingPage/LandingPage';
import Marque from './Component/Pages/Marque/Marque';

const App = () => {
  return (
   
   <div className='min-h-screen bg-zinc-800'>
      <Router>

        <Navbar></Navbar>

        <LandingPage></LandingPage>

        <Marque></Marque>

      </Router>
    </div>
  )
}

export default App
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./Component/Pages/Navbar/Navbar"
import LandingPage from './Component/Pages/LandingPage/LandingPage';

const App = () => {
  return (
    <div>
      <Router>

        <Navbar></Navbar>

        <LandingPage></LandingPage>

      </Router>
    </div>
  )
}

export default App
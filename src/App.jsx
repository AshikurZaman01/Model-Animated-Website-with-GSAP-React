import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./Component/Pages/Navbar/Navbar"

const App = () => {
  return (
    <div>
      <Router>
        <Navbar></Navbar>

      </Router>

    </div>
  )
}

export default App
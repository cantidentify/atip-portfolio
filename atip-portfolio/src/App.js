import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/layout/Navbar';
import Home from './pages/Home'
import About from './pages/About'
import Career from './pages/Career'
import Skill from './pages/Skill'
import './App.css';

function App() {
  return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>  
          <Route path='/about' element={<About/>}/>  
          <Route path='/career' element={<Career/>}/>  
          <Route path='/skill' element={<Skill/>}/>  
        </Routes>        
      </Router>
  );
}

export default App;

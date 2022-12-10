import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Main from './pages/Main'
import './App.css';

function App() {
  return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>}/>  
        </Routes> 
        <Footer/>
      </Router>
  );
}

export default App;

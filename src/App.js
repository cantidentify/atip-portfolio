import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Main from './pages/Main'
import './App.css';

function App() {
  return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>}/>  
        </Routes>        
      </Router>
  );
}

export default App;

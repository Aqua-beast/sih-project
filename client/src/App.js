import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Sentiment from './pages/Sentiment'
import About from './pages/About'
import Services from './pages/Services';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact element={<Index />} />
          <Route path='/home' element={<Sentiment />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

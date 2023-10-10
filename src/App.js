import './styles/App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AboutMe from './pages/aboutMe';
import Resume from './pages/resume';
import Portfolio from './pages/portfolio';
import Contacts from './pages/contacts';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/React-Portfolio" />} />
        <Route path="/React-Portfolio" element={<AboutMe />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
      <Footer />
     </Router>
    </div>
  );
}

export default App;
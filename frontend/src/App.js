import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import URLShortener from './components/URLShortener';
import HomePage from './components/HomePage';
import Analytics from './components/Analytics';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <URLShortener />
      <Routes>
        <Route path="/url" element={<HomePage />} />
        <Route path="/url/analytics" element={<Analytics />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

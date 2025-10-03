import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './Pages/LandingPage/LandingPage';
import FeaturePage from './Pages/FeaturePage/FeaturePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/" element={<FeaturePage />} />

      </Routes>
    </div>
  );
}

export default App;

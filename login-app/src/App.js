import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import WelcomePage from './pages/WelcomePage';
import ManagerPage from './pages/ManagerPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<LoginPage
            />}
          />
          <Route
            path="/welcome"
            element={<WelcomePage
            />}
          />
          <Route
            path="/manager"
            element={<ManagerPage
            />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

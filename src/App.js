import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route, useSearchParams } from 'react-router-dom';
import Profile from './components/Profile';
import Createaccount from './components/Createaccount';
import Feed from './components/Feed';
import { useState } from 'react';
import Nav from './components/Nav';
import Users from './components/Users';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <div>
        {isLoggedIn && <Nav />}
        <div className={isLoggedIn ? 'pt-16' : ''}>
          <Routes>
            <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/createaccount" element={<Createaccount />} />
            <Route path="/feed" element={isLoggedIn ? <Feed /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/users" element={isLoggedIn ? <Users /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/profile" element={isLoggedIn ? <Profile /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

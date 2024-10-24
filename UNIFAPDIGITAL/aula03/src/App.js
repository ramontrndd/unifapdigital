import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import Setting from './pages/Setting';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <SideBar />
        <div className="flex-1 ml-64">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

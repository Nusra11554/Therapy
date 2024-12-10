import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import PatientDetails from './components/Patient';
import { default as PatientPortal, default as UserDashboard } from './components/PatientPortal';
import Signup from './components/Signup';
import PharmacistDashboard from './components/PharmacistDashboard';
import ReceptionDashboard from './components/Receptionist';
import Newtherapy from './components/Newtherapy';
import TherapyPage from './components/TherapyPage';
const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    return (
        <Router>
            <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
            <div className="content">
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                <Route path="/user-dashboard" element={<UserDashboard />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/patients/:id" element={<PatientDetails />} />
                <Route path="/patient-portal" element={<PatientPortal />} />
                <Route path="/pharmacy" element={<PharmacistDashboard />} />
                <Route path="/recep" element={<ReceptionDashboard />} />
                <Route path="/Newtherapy" element={<Newtherapy/>} />
                <Route path="/therapypage" element={<TherapyPage />} />
            </Routes>
            </div>
        </Router>
    );
};

export default App;

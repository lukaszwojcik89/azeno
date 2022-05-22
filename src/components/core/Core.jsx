import React, { useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import Login from '../../Auth/Login';
import Register from '../../Auth/Register';
import useCookie from '../../Hooks/useCookie';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import Train from '../Train/Train';

function Core({ cookie }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (cookie === undefined) {
            navigate('/profile');
        }
    }, []);

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                {cookie ? (
                    <>
                        <Route path="/" element={<Link to="/profile">Profile</Link>} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/train" element={<Train />} />
                    </>
                ) : (
                    <>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </>
                )}
            </Routes>
        </BrowserRouter>
    );
}

export default Core;

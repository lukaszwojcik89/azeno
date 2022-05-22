import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import useCookie from '../../Hooks/useCookie';
import Core from '../core/Core';
import Header from '../Header/Header';
import './App.scss';

function App() {
    const [cookie, setCookie] = useCookie('token_auth');

    return (
        <BrowserRouter>
            <Header />
            <Core cookie={cookie} />
        </BrowserRouter>
    );
}

export default App;

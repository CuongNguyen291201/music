import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as router from './utils/router';
import Home from './pages/home/Home';
import Auth from './pages/auth/Auth';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={router.ROUTER_AUTH} element={<Auth />} />
                    <Route path={router.ROUTER_HOME} element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

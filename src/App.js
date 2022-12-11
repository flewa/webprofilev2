import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/*' key={"flew"} element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
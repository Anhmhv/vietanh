import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './home';
const Main = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path=":userId" element={<Home/>}/> */}
            </Routes>
        </>
    );
};

export default Main;
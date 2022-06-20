import React, { Suspense } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Home from './home'
import About from './about'

// const About = React.lazy(() => import('./about'))
// const Home = React.lazy(() => import('./home'))

function Routing(props) {
    return (
        <BrowserRouter>
            {/* <Suspense fallback={<div>Loading...</div>}> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="home" element={<Home />} />
            </Routes>
            {/* </Suspense > */}
        </BrowserRouter>
    );
}

export default Routing;
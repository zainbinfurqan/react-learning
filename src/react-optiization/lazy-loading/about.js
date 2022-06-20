import React from 'react';
import { Link } from "react-router-dom";

function About(props) {
    return (
        <div>
            <p>About</p>
            <Link to="/home">Home</Link>
        </div>
    );
}

export default About;
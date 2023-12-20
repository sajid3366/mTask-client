import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            this is navbar
            <Link to="/login">Login</Link>
        </div>
    );
};

export default Navbar;
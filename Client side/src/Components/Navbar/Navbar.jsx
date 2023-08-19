import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <h2>This is Nav</h2>
            <Link to='/details'>Details</Link>
        </div>
    );
};

export default Navbar;
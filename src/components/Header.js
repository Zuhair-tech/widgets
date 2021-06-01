import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return( 
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <Link to="/" className="nav-link active">Accordion</Link>
            </li>
            <li class="nav-item">
                <Link to="/dropdown" className="nav-link">Dropdown</Link>
            </li>
            <li class="nav-item">
                <Link to="/search" className="nav-link">Search</Link>
            </li>
            <li class="nav-item">
                <Link to="/translate" className="nav-link">Translate</Link>
            </li>
        </ul>      
    );
}

export default Header;

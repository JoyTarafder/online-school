import React from 'react';
import logo from '../../images/headerimage.jpg';
import './Header.css';
import Image from 'react-bootstrap/Image'

const Header = () => {
    return (
        <div className="header">
            <Image src={logo} roundedCircle />
        </div>
    );
};

export default Header;
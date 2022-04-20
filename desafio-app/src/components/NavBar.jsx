import React from 'react';
import './NavBar/NavBar.css';
function NavBar(props) {
    return (
        <div >
            <ul className='nav'>
                <h1>Cinematics</h1>
                <a href='#'>Amazon</a>
                <a href='#'>HBO Max</a>
                <a href='#'>Netflix</a>
            </ul>
        </div>
    );
}

export default NavBar;
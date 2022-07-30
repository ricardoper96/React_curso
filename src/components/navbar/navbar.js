import React from "react";
import './navbar.css'
export const Navbar = ()=> {
    return (
        <div className='header-app'>
            <header>
                <nav className='Nav'>
                    <ul className='list-app'>
                        <li className='item'> home</li>
                        <li className='item'>blog</li>
                        <li className='item'>personajes</li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}
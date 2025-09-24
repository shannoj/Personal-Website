import React from 'react';

function Header() {
    return (
        <header className='w-auto flex justify-between'>
            <a className='m-5 flex justify-center items-center'>Jamie Shannon</a>
            <nav className='flex justify-center'>
                <ul className='py-2 flex justify-center content-center'>
                    <li className='m-5 content-center'><a href="/">Home</a></li>
                    <li className='m-5 content-center'><a href="/about">About</a></li>
                    <li className='m-5 content-center'><a href="/services">Services</a></li>
                    <li className='m-5 content-center'><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
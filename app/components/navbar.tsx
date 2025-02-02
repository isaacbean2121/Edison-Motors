'use client';


import React, { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../public/assets/logo/edison_logo_inverted_2.png';
import Link from 'next/link';


const MenuItems = () => {
    const items = [["250 Series", "/"], ["500 Series", "/500info"], ["750 Series", "/750info"], ["Retrofit Kits", "/RetroFitKits"], ["About Us", "/"]];
    return (
        <ul className="flex flex-col md:flex-row items-center">
            {items.map((item) => (
                <li key={item[0]} className="px-4 py-2 cursor-pointer hover:rounded custom-underline">
                    <Link href={item[1]}>
                        {item[0]}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="text-white h-16 w-full flex items-center px-6 fixed top-0 z-10" 
        style={{ 
            background: 'linear-gradient(to bottom, black, rgba(0, 0, 0, 0))',
            transition: 'background-color 1.2s ease' // Add this line
        }}
             
             onMouseOver={e => e.currentTarget.style.background = 'black'}
             onMouseOut={e => e.currentTarget.style.background = 'linear-gradient(to bottom, black, rgba(0, 0, 0, 0))'}
             >
            <div className="flex justify-between items-center w-full mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                {/* Logo */}
                <div>
                    <Link href="/">
                        <img src={logo.src} alt="logo" style={{ height: '50px' }} />    
                    </Link>
                </div>

                {/* Menu Icon for smaller screens */}
                <div className="md:hidden cursor-pointer">
                    <MenuIcon aria-label="Open Menu" onClick={() => setIsMenuOpen(true)} />
                </div>
                
                {/* Centered list items */}
                <div className={`${isMenuOpen ? 'block' : 'hidden'} md:flex`}>
                    <MenuItems />
                </div> 

                {/* Account on the right */}
                <div className="hidden md:flex px-3 py-2 cursor-pointer hover:rounded custom-underline">
                    <ul className="flex items-center">
                        <PersonIcon />
                        <li>Account</li>
                    </ul>
                </div>
            </div>

            {/* Dropdown Menu for smaller screens */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-white z-20 md:hidden text-black">
                    <div className="flex justify-end p-4">
                        <CloseIcon aria-label="Close Menu" className='cursor-pointer mt-1 mr-8' onClick={() => setIsMenuOpen(false)} />
                    </div>
                    <MenuItems />
                </div>
            )}
        </nav>
    );
}
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { navItems } from '../constants';
import useAuth from './useAuth';

function Navbar({ isDark }) {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const { isLoggedIn, handleLogout, user } = useAuth();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleNavbar = () => {
        if (isMobile) {
            setMobileDrawerOpen(!mobileDrawerOpen);
        }
    };

    const textColor = isDark ? 'text-white' : 'text-[#003366]';
    const hoverText = isDark ? 'hover:text-gray-300' : 'hover:text-[#00509e]';
    const hoverBg = isDark ? 'hover:bg-gray-700' : 'hover:bg-[#00509e]';

    return (
        <div className="relative w-full overflow-x-hidden">
            <nav className='sticky top-0 z-50 backdrop-blur-lg border-b border-neutral-700/80 w-full' onClick={toggleNavbar}>
                <div className='container px-4 mx-auto relative lg:text-sm flex justify-between items-center w-full'>
                    <div className='flex items-center flex-shrink-0'>
                        <h2 className={`text-2xl font-bold flex items-center gap-2 ${textColor}`}>
                            <img src="/logo.jpeg" className="w-12 h-12" alt="Logo" />
                            <Link to="/" className={`hover:underline ${textColor}`}>
                                Fisherman's Compass
                            </Link>
                        </h2>
                    </div>
                    <div className='flex space-x-6 items-center'>
                        <div className='hidden lg:flex ml-14 space-x-12'>
                            {navItems.map((item, index) => (
                                <li key={index} className='list-none'>
                                    <a href={item.href} className={`${textColor} ${hoverText}`}>{item.label}</a>
                                </li>
                            ))}
                        </div>
                        <div className='hidden lg:flex justify-center space-x-6 items-center'>
                            {isLoggedIn ? (
                                <>
                                    <span className={`text-sm ${textColor}`}>Welcome, {user.email}</span>
                                    <button
                                        onClick={handleLogout}
                                        className={`py-2 px-3 border rounded-md ${textColor} ${hoverBg}`}>
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <a href='/login' className={`py-2 px-3 border rounded-md ${textColor} ${hoverText}`}>
                                        Sign In
                                    </a>
                                    <a href='/signup' className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md text-white'>
                                        Sign Up
                                    </a>
                                </>
                            )}
                        </div>
                        {/* Language Widget */}
                        <div className='hidden lg:flex items-center space-x-2'>
                            <script src="https://static.elfsight.com/platform/platform.js" async></script>
                            <div className="elfsight-app-a55d9b4c-4790-4775-9e0d-66d770209238 w-8 h-8" data-elfsight-app-lazy></div>
                        </div>
                    </div>
                </div>
            </nav>
            {mobileDrawerOpen && (
                <div className='fixed top-0 left-1/2 transform -translate-x-1/2 z-[100] bg-black/90 w-full flex justify-center'>
                    <div className='bg-neutral-900 w-4/5 max-w-md p-6 flex flex-col justify-start items-center shadow-2xl rounded-lg mt-4'>
                        <ul className='w-full space-y-4 text-center'>
                            {navItems.map((item, index) => (
                                <li key={index} className='list-none'>
                                    <a href={item.href} className='block py-2 px-4 text-white hover:bg-neutral-700 rounded-md'>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className='mt-6 w-full flex flex-col space-y-4 items-center'>
                            {isLoggedIn ? (
                                <>
                                    <span className="text-sm text-white">Welcome, {user.email}</span>
                                    <button
                                        onClick={handleLogout}
                                        className='py-2 px-3 border rounded-md w-full text-white hover:bg-[#00509e]'>
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <a href='/login' className='py-2 px-3 border rounded-md w-full text-white bg-neutral-800 hover:bg-neutral-700 text-center'>
                                        Sign In
                                    </a>
                                    <a href='/signup'
                                        className='bg-black py-2 px-3 rounded-md w-full text-center text-white hover:bg-gray-800'>
                                        Sign Up
                                    </a>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;

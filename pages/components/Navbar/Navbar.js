import  React from 'react';
import logo from '../../images/logo.png';

const Navbar = () => {

    const handleToggleMenu = () => {
        document.querySelector('.nav-items-container')
        .classList.toggle('h-48')
    }

    window.onscroll = () => {
        document.querySelector('.nav-items-container')
        .classList.remove('h-48')
    }

    document.onclick = (e) => {
        const navContainer = document.querySelector('.nav-items-container');
        if (e.target.classList.contains('menu') || e.target.classList.contains('menu-span')) {
            return true;
        } else {
            if (navContainer.classList.contains('h-48')) {
                navContainer.classList.remove('h-48')
            }
        }

    }

    
    window.onload = () => {
        const navItems = document.querySelectorAll('ul li .nav-item');
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].onclick = (e) => {
                const getNameProp = e.target.name;
                document.getElementById(getNameProp).scrollIntoView({behavior: 'smooth'})
            }
        }
    }


    return (
        <nav className="bg-white shadow-md fixed top-0 z-20 left-0 right-0">
            <div className="py-4 sm:flex justify-between relative">
                <div className="ml-8 sm:ml-12 inline-block text-xl h-8">
                    <a href="/react_portfolio_app" className="no-underline text-black flex w-full h-full">
                        <div className="w-12 h-8">
                            <img src={logo} className="w-full h-full"/>
                        </div>
                        <span className="block ml-2 w-24">SidiDev</span>
                    </a>
                </div>
                <div className="overflow-hidden shadow-md h-0 absolute bg-white w-full pb-4 sm:relative sm:inline-block sm:h-auto sm:w-auto sm:shadow-none sm:pb-0 nav-items-container" style={{transition: '.3s ease-in-out'}}>
                    <div className="sm:mr-12 nav-items">
                        <ul className="ml-16 mt-5 text-gray-700 space-y-5 sm:flex sm:space-x-5 sm:mt-0 sm:space-y-0 list-none p-0">
                            <li className="hover:text-gray-800 ml-5 mr-5"><a name="contact" className="nav-item no-underline cursor-pointer">Contact</a></li>
                            <li className="hover:text-gray-800 ml-5 mr-5"><a name="about" className="nav-item no-underline cursor-pointer">About</a></li>
                            <li className="hover:text-gray-800 ml-5 mr-5"><a name="skills" className="nav-item no-underline cursor-pointer">Skills</a></li>
                            <li className="hover:text-gray-800 ml-5 mr-5"><a name="projects" className="nav-item no-underline cursor-pointer">Projects</a></li>
                        </ul>
                    </div>
                </div>
                <div className="cursor-pointer mt-2 mr-4 w-6 float-right sm:hidden menu" onClick={() => handleToggleMenu()}>
                    <span className="w-full block bg-gray-700 menu-span" style={{height: '3px'}}></span>
                    <span className="w-full block bg-gray-700 menu-span" style={{height: '3px',marginTop: '3px'}}></span>
                    <span className="w-full block bg-gray-700 menu-span" style={{height: '3px',marginTop: '3px'}}></span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
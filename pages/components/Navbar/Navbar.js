import { useEffect } from "react"
import Link from 'next/link'

const Navbar = () => {
   
    useEffect(() => {

        const navItems = document.querySelectorAll('ul li .nav-item');
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].onclick = (e) => {
                const getNameProp = e.target.name;
                document.getElementById(getNameProp).scrollIntoView({behavior: 'smooth'})
            }
        }
        
    }, [])


    return (
        <nav className="bg-white shadow relative sm:fixed top-0 z-40 left-0 right-0">
            <div className="py-4 items-center sm:flex justify-between relative">
                <div className="ml-8 sm:ml-12 inline-block text-xl h-8">
                    <a href="/" className="no-underline text-black flex w-full h-full">
                        <div className="w-12 h-8">
                            <img src='/images/logo.png' className="w-full h-full"/>
                        </div>
                        <span className="block ml-2 w-24">SidiDev</span>
                    </a>
                </div>
                <div className="overflow-hidden shadow-md h-0 absolute bg-white w-full pb-4 sm:relative sm:inline-block sm:h-auto sm:w-auto sm:shadow-none sm:pb-0 nav-items-container" style={{transition: '.3s ease-in-out'}}>
                    <div className="sm:mr-12 nav-items">
                        <ul className=" mt-5 text-gray-700 space-y-5 sm:flex sm:space-x-5 sm:mt-0 sm:space-y-0 list-none p-0">
                            <li className="hover:text-gray-800 ml-5 mr-5"><button name="contact" className="nav-item no-underline border-none focus:outline-none">Contact</button></li>
                            <li className="hover:text-gray-800 ml-5 mr-5"><button name="about" className="nav-item no-underline border-none focus:outline-none">About</button></li>
                            <li className="hover:text-gray-800 ml-5 mr-5"><button name="skills" className="nav-item no-underline border-none focus:outline-none">Skills</button></li>
                            <li className="hover:text-gray-800 ml-5 mr-5"><button name="projects" className="nav-item no-underline border-none focus:outline-none">Projects</button></li>
                            <Link href="/blog" className="hover:text-gray-800 ml-5 mr-5">
                                <a>
                                    Blog
                                </a>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
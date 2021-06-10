import { useEffect } from "react"
import Link from 'next/link'

const Navbar = () => {

    return (
        <nav className="bg-white shadow fixed top-0 left-0 right-0 z-30">
            <div className="py-4 items-center sm:flex justify-between relative">
                <div className="ml-8 sm:ml-12 inline-block text-xl h-8">
                    <Link href="/blog">
                        <a className="no-underline text-black flex items-center w-full h-full">
                            <div className="w-12 h-8">
                                <img src='/images/logo.png' className="w-full h-full"/>
                            </div>
                            <span className="block text-gray-900 font-medium ml-2 text-2xl">SidiDev<span className="text-lg" style={{color: '#0D9488'}}>BLOG</span></span>
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
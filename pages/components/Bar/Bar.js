import Link from 'next/link'
import { useEffect } from 'react';

const Bar = () => {

    useEffect(() => {

        const barItems = document.querySelectorAll('.bar-items .item');
        for (let i = 0; i < barItems.length; i++) {
            barItems[i].onclick = (e) => {
                const getNameProp = e.target.name;
                document.getElementById(getNameProp).scrollIntoView({behavior: 'smooth'})
            }
        }
        
    }, [])

    return (
        <div className="fixed w-full z-50 sm:hidden" style={{bottom: '0.5em'}}>
            <div className="bg-white shadow-md border p-2 mx-8 rounded-lg">
                <div className="grid grid-cols-4 bar-items">
                    <button className="item text-gray-700 text-center focus:outline-none border-none rounded-lg" name="contact">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 m-auto pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-xs pointer-events-none bar-item-text">
                            Contact
                        </span>
                    </button>
                    <button className="item text-gray-700 text-center focus:outline-none border-none rounded-lg" name="skills">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 m-auto pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                        <span className="text-xs pointer-events-none bar-item-text">
                            Skills
                        </span>
                    </button>
                    <button className="item text-gray-700 text-center focus:outline-none border-none rounded-lg" name="projects">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 m-auto pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        <span className="text-xs pointer-events-none bar-item-text">
                            Projects
                        </span>
                    </button>
                    <Link href="/blog">
                        <a className="text-gray-700 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            <span className="text-xs bar-item-text">
                                Blog
                            </span>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Bar
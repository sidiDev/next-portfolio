import Link from 'next/link'
import { useEffect } from 'react'

const BlogCard = (props) => {

    
    return (
        <>
            {
                
                props.loading ? (
                    <div className="pb-12">
                        <svg className="animate-spin m-auto h-14 w-14 text-indigo-600 absolute left-0 right-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    </div>
                ) : (

                    props.data && props.data.length > 0 ? (
                        props.data.map((items, key) => {
                            return (
                                <div className="shadow-lg border rounded-md transition duration-300 hover:shadow-sm" key={key}>
                                    <Link href={`/blog/${items.url}`}>
                                        <a>
                                            <img src={`${items.img}?q=70`} loading="lazy" alt={items.title}  className="w-full h-48 rounded-tl-md rounded-tr-md" />
                                            <div className="pt-3 ml-6 mr-2">
                                                <p className="text-xl text-gray-900">
                                                    {items.title}
                                                </p>
                                                <p className="text-gray-400 text-sm sm:h-20 mt-1">{items.description.slice(0, 100)}</p>
                                            </div>
                                            <div className="flex items-center space-x-3 mt-2 pt-3 pb-2 ml-4 mr-2">
                                                <div className="w-14 h-14 rounded-full">
                                                    <img src={'/images/'+items.createdLogo} className="w-14 h-14 rounded-full" alt={items.cratedName} />
                                                </div>
                                                <div>
                                                    <span className="block text-gray-900">{items.cratedName}</span>
                                                    <span className="block text-gray-400 text-sm">{new Date(items.date).toDateString()}</span>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            )
                        })
                    ) : ''
                )
            }
        </>
    )
}

export default BlogCard
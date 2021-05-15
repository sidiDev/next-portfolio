import Link from 'next/link'
import { useEffect } from 'react'

const BlogCard = (props) => {

    
    return (
        <>
            {
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
                                                <span className="block text-gray-400 text-sm">{new Date(items.date).toLocaleDateString()}</span>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        )
                    })
                ) : ''
            }
        </>
    )
}

export default BlogCard
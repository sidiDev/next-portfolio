import Link from 'next/link'
import Image from 'next/image'

const BlogCard = () => {
    return (
        <div className="shadow-lg border rounded-md transition duration-300 hover:shadow-sm">
            <Link href="">
                <a>
                    <Image src="/images/blog-cover.png" alt="" width="1000px" height="450px" layout="intrinsic" className="w-full rounded-tl-md rounded-tr-md" />
                    <div className="pt-3 ml-6 mr-2">
                        <p className="text-xl text-gray-900">
                            We’ve got more coming...
                        </p>
                        <p className="text-gray-400 text-sm">
                            Want to hear from us when we add new components? Sign up for our newsletter and we'll email you every time we release a new                </p>
                    </div>
                    <div className="flex items-center space-x-3 mt-2 pt-3 pb-2 ml-4 mr-2">
                        <div className="w-12 h-12 rounded-full">
                            <img src="/images/idea.png" alt="" />
                        </div>
                        <div>
                            <span className="block text-gray-900">Sidi dev</span>
                            <span className="block text-gray-400 text-sm">Mar 16, 2020</span>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default BlogCard
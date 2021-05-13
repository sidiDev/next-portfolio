import BlogCard from "../components/BlogCard/BlogCard"

const index = () => {
    return (
        <div className="font-mono bg-white">
            <div className="w-full h-72 bg-gray-900 relative">
                <div className="mx-8 h-full flex justify-center items-center">
                    <div className="text-center">
                        <h1 className="text-3xl text-gray-100 sm:text-4xl">
                            Welcome in my blog
                        </h1>
                        <p className="mt-2 text-gray-300">I share some of my software knowldge in this blog</p>
                    </div>
                </div>
                <div className="absolute w-32 h-32 rounded-full bg-white m-auto" style={{bottom: '-4em', left: 0, right: 0}}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-28 w-28 text-indigo-600 m-auto" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
            <div className="mx-8 mt-32 mb-4 grid gap-2 sm:w-5/6 lg:w-4/6 sm:grid-cols-2 sm:mx-auto">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />

            </div>
        </div>
    )
}

export default index
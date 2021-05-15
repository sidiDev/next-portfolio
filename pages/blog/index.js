import BlogCard from "../components/BlogCard/BlogCard"
import Contact from "../components/Contact/Contact"
import Footer from "../components/Footer/Footer"

import Head from 'next/head'
import api from "../components/api/api"

const index = ({data}) => {
    
    return (
        <div className="font-mono bg-white">
            <Head>
                <meta property="og:site_name" content="sidiDev - front end developer" /> 
                <meta name="keyword" content="programing,software,developer,blog,front end,front end job,web developer,web development,web designer,html,css,javascript,bootstrap,web dev,web,website, javascript,go,c#,c++,python,php,nodejs,expressjs,ruby,tailwindcss,sass,scss,reactjs,nextjs" />
                <meta name="description" content="I'am a frontend developer and this is my blog i share here my software knowldge about programing, frameworks, tools, some tips to help you as a programmer or as a software engineer" />
                <meta name="twitter:site" content="@sidi_jeddou_dev" />
                <meta name="twitter:creator" content="@sidi_jeddou_dev" />
                <title>
                    SidiDev - Blog
                </title>
            </Head>
            <div className="w-full h-72 relative blog-header">
                <div className="mx-8 h-full flex justify-center items-center">
                    <div className="text-center relative z-30">
                        <h1 className="text-3xl text-gray-100 sm:text-4xl">
                            Welcome in my blog
                        </h1>
                        <p className="mt-2 m-auto text-gray-300 text-sm sm:text-base sm:w-5/6">I share some of my experience and my software knowldge in this blog</p>
                    </div>
                    <div className="absolute w-full h-full bg-gray-900 top-0 opacity-60 z-20"></div>
                </div>
                <div className="absolute w-32 h-32 rounded-full bg-white m-auto z-30" style={{bottom: '-4em', left: 0, right: 0}}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-28 w-28 text-indigo-600 m-auto" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
            <div className="mx-8 mt-32 mb-4 grid gap-2 sm:w-5/6 lg:w-4/6 sm:grid-cols-2 sm:mx-auto">
                <BlogCard data={data} />
            </div>
            <div className="mt-4">
                <Contact />
                <Footer />
            </div>
        </div>
    )
}

index.getInitialProps = async () => {
    const res = await fetch(`${api()}/api/articles`)
    const json = await res.json()
    return { data: json.articles ?  json.articles : []}
}

export default index

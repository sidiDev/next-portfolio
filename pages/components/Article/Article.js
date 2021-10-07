import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import api from '../api/api'
import SocialMediaShare from '../SocialMediaShare/SocialMediaShare'

const Article = (props) => {

    const [article, setArticle] = useState(props.data && props.data.article ? [props.data.article] : [])
    const [loading, setLoading] = useState()
    const [shareToggle, setShareToggle]= useState(false)

    const router = useRouter()

    return (
        <article className="mx-8 sm:m-auto sm:w-5/6 lg:w-4/6">
            {
                    article.length > 0 ? (
                        <div className="relative overflow-hidden">
                            <Head>
                                <meta property="og:image" content={article[0].img} />
                                <meta property="og:image:width" content="1007" />
                                <meta property="og:image:height" content="527" />
                                <meta property="og:site_name" content="sidiDev - front end developer" />
                                <meta name="keyword" content="programing,software,developer,blog,front end,front end job,web developer,web development,web designer,html,css,javascript,bootstrap,web dev,web,website, javascript,go,c#,c++,python,php,nodejs,expressjs,ruby,tailwindcss,sass,scss,reactjs,nextjs" />
                                <meta property="og:type" content="article" />
                                <meta name="description" content={article[0].description} />
                                <meta property="og:title" content={article[0].title} />
                                <meta property="og:description" content={article[0].description} />
                                <meta name="roboots" content="index,follow" />
                                <title>
                                    {article[0].title}
                                </title>
                            </Head>
                            <div className="relative">
                                <figure>
                                    <img src={article[0].img} alt={article[0].title} className="w-full mt-32 rounded-md h-60 sm:h-72 md:h-96" />
                                </figure>
                            
                                <div className="absolute h-full right-4 top-0">
                                    <div className={`overflow-hidden absolute right-0 -bottom-1 w-12 ${shareToggle ? 'h-60' : 'h-0'} transform translate-y-2 shadow-md bg-white rounded-md rounded-br-lg`} style={{transition: '.3s'}}>
                                        <SocialMediaShare url={'https://sidi.vercel.app/blog/'+router.query.url} title={article[0].title} />
                                    </div>
                                    <button className="absolute -bottom-12 border right-0 transform -translate-y-6 shadow-md rounded-full w-12 h-12 text-indigo-600 bg-white flex items-center justify-center z-20 focus:outline-none focus:ring focus:ring-offset-indigo-600 focus:shadow-none"
                                        onClick={() => setShareToggle(!shareToggle)}
                                    >
                                        {
                                            shareToggle ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>

                                            ) : (

                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                                                </svg>
                                            )
                                        }
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3 mt-4 pt-3 pb-2">
                                <div className="w-14 h-14 rounded-full">
                                    <img src={'/images/'+article[0].createdLogo} className="w-14 h-14 rounded-full" alt={article[0].cratedName} />
                                </div>
                                <div>
                                    <span className="block text-gray-700">Posted by <span className="font-medium text-indigo-700">{article[0].cratedName}</span></span>
                                    <span className="block text-gray-700">Posted at <span className="font-medium text-indigo-700">{new Date(article[0].date).toDateString()}</span></span>
                                </div>
                            </div>
                            <h1 className="text-xl mt-4">
                                {article[0].title}
                            </h1>
                            <div className="mt-12 article-content prose" dangerouslySetInnerHTML={{__html:article[0].article.childNodes[0].children}}></div>
                        </div>
                    ) : ''
            }
        </article>
    )
}

export default Article

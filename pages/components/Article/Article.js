import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import api from '../api/api'
import SocialMediaShare from '../SocialMediaShare/SocialMediaShare'

const Article = (props) => {

    const [article, setArticle] = useState(props.data.data)
    const [loading, setLoading] = useState()
    const [shareToggle, setShareToggle]= useState(false)

    const router = useRouter()

    const articleContent = useRef()

    useEffect(() => {

        // setLoading(true)

        // axios.get(`${api()}/api/article/${props.url}`).then(res => {
        //     if (res.data.article) {
        //         setArticle([res.data.article])
        //         setLoading(false)
        //     }
        // })
        
        if (article.length > 0) {

            const convertToDOM = new DOMParser().parseFromString(article[0].article, "text/html")
            articleContent.current.innerHTML = convertToDOM.childNodes[0].lastChild.childNodes[0].innerHTML
        }

    }, [])

    return (
        <article className="mx-8 sm:m-auto sm:w-5/6 lg:w-4/6">
            {
                // loading ? (
                //     <div className="pb-12">
                //         <svg className="animate-spin m-auto h-14 w-14 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                //             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                //             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                //         </svg>
                //     </div>
                // ) : (
                    article.length > 0 ? (
                        <div className="relative">
                            <Head>
                                <meta property="og:image" content={`${article[0].img}?fit=max&amp;fm=jpg&amp;w=1000`} />
                                <meta property="og:image:width" content="1007" />
                                <meta property="og:image:height" content="527" />
                                <meta property="og:site_name" content="sidiDev - front end developer" />
                                <meta name="keyword" content="programing,software,developer,blog,front end,front end job,web developer,web development,web designer,html,css,javascript,bootstrap,web dev,web,website, javascript,go,c#,c++,python,php,nodejs,expressjs,ruby,tailwindcss,sass,scss,reactjs,nextjs" />
                                <meta name="description" content={article[0].description} />
                                <meta name="twitter:site" content="@sidi_jeddou_dev" />
                                <meta name="twitter:creator" content="@sidi_jeddou_dev" />
                                <title>
                                    {article[0].title}
                                </title>
                            </Head>
                            <div className="relative">
                                <img src={article[0].img} alt={article[0].title} className="w-full rounded-md h-60 sm:h-72 md:h-96" />
                            
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
                            <div className="mt-12 article-content" ref={articleContent}></div>
                        </div>
                    ) : ''
            }
        </article>
    )
}

export default Article

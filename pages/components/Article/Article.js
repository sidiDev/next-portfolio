import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import api from '../api/api'

const Article = ({url}) => {

    const [article, setArticle] = useState([])

    const articleContent = useRef()
    
    useEffect(() => {

        axios.get(`${api()}/api/article/${url}`).then(res => {
            if (res.data.article) {
                console.log(res.data.article)
                setArticle([res.data.article])
                const convertToDOM = new DOMParser().parseFromString(res.data.article.article, "text/html")
                articleContent.current.innerHTML = convertToDOM.childNodes[0].lastChild.childNodes[0].innerHTML
            }
        })


    }, [url])

    return (
        <div className="mx-8 sm:m-auto sm:w-5/6 lg:w-4/6">
            {
                article.length > 0 ? (
                    <>
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
                        <div>
                            <img src={article[0].img} alt={article[0].title} className="w-full rounded-md h-60 sm:h-72 md:h-96" />
                        </div>
                        <div className="flex items-center space-x-3 mt-2 pt-3 pb-2">
                            <div className="w-14 h-14 rounded-full">
                                <img src={'/images/'+article[0].createdLogo} className="w-14 h-14 rounded-full" alt={article[0].cratedName} />
                            </div>
                            <div>
                                <span className="block text-gray-700">Posted by <span className="font-medium text-gray-900">{article[0].cratedName}</span></span>
                                <span className="block text-gray-700">Posted at <span className="font-medium text-gray-900">{new Date(article[0].date).toDateString()}</span></span>
                            </div>
                        </div>
                        <h1 className="text-xl mt-4">
                            {article[0].title}
                        </h1>
                        <div className="mt-12 article-content" ref={articleContent}></div>
                    </>
                ) : ''
            }
        </div>
    )
}

export default Article
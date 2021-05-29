import '../styles/globals.css'
import '../styles/customize.css'
import Head from 'next/head'
import axios from "axios"
import api from './components/api/api'


function MyApp({ Component, pageProps, articles }) {

  

  return (    
      <div className="app-container bg-gray-100">
        <Head>
        <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
	  <meta name="roboots" content="index,follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="preconnect" href="https://media.nedigital.sg" />
          <link rel="dns-prefetch" href="https://media.nedigital.sg" />
          <meta name="google-site-verification" content="_AGAp-l5dDX_qosvctD2d6x0K_3-SKcPofPOd2sC1S4" />
        </Head>
        <Component {...pageProps} articles={articles} />
      </div>
  ) 
}

MyApp.getServerSideProps = async () => {
  const { data } = await  axios.get(`${api()}/api/articles`)

  return {
      articles: data.articles ? {data: data.articles, loading: false} : {data: [], loading: false}
  }
}

export default MyApp

import '../styles/globals.css'
import '../styles/customize.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (    
      <div className="app-container bg-gray-100">
        <Head>
          <link rel="preconnect" href="https://media.nedigital.sg" />
          <link rel="dns-prefetch" href="https://media.nedigital.sg" />
        </Head>
        <Component {...pageProps} />
      </div>
  ) 
}

export default MyApp

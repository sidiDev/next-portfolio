import '../styles/globals.css'
import '../styles/customize.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (    
      <div className="app-container bg-gray-100">
        <Head>
        <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="preconnect" href="https://media.nedigital.sg" />
          <link rel="dns-prefetch" href="https://media.nedigital.sg" />
          <meta name="google-site-verification" content="_AGAp-l5dDX_qosvctD2d6x0K_3-SKcPofPOd2sC1S4" />
        </Head>
        <Component {...pageProps} />
      </div>
  ) 
}

export default MyApp

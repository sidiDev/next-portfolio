import '../styles/globals.css'
import '../styles/customize.css'

function MyApp({ Component, pageProps }) {
  return <div className="app-container"><Component {...pageProps} /></div>
}

export default MyApp

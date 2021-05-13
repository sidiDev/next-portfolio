import '../styles/globals.css'
import '../styles/customize.css'

function MyApp({ Component, pageProps }) {
  return <div className="app-container bg-gray-100"><Component {...pageProps} /></div>
}

export default MyApp

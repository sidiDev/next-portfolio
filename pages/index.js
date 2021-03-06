import Head from 'next/head'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Bar from './components/Bar/Bar'

export default function Home() {
  return (
    <div className="relative font-mono p-0 m-0">
      <Head>
        <meta property="og:site_name" content="sidiDev - front end developer" /> 
        <meta name="keyword" content="developer,portfolio,front end,front end job,web developer,web development,web designer,html,css,javascript,bootstrap,web dev,web,website" />
        <meta name="description" content="I'am a frontEnd developer and this website is a portfolio contain my works and information about me." />
        <meta name="twitter:site" content="@sidi_jeddou_dev" />
        <meta name="twitter:creator" content="@sidi_jeddou_dev" />
        <title>
          SidiDev - Frontend developer
        </title>
      </Head>

      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Bar />
      <Footer />
    </div>
  )
}
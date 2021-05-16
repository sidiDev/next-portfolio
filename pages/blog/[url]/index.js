import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import api from '../../components/api/api'
import Article from '../../components/Article/Article'
import Navbar from '../../components/Article/Navbar'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'

const index = (props) => {

    const router = useRouter()

    const { url } = router.query

    console.log(props);

    return (
        <div className="bg-white">
            <Navbar />
            <div className="mt-32">
                <Article url={url} />
            </div>
            <Contact />
            <Footer />
        </div>
    )
}

export default index

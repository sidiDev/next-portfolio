import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import api from '../../components/api/api'
import Article from '../../components/Article/Article'
import Navbar from '../../components/Article/Navbar'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'

const index = (props) => {

    return (
        <div className="bg-white">
            <Navbar />
            <div className="mt-32">
                <Article data={props.article} />
            </div>
            <Contact />
            <Footer />
        </div>
    )
}

index.getInitialProps = async ({query}) => {

    const { url } = query
    const { data } = await axios.get(`${api()}/api/article/${url}`)

    return {
        article: data.article ? {data: data.article, loading: false} : {data: [], loading: false}
    }
}

export default index

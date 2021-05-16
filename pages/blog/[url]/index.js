import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import api from '../../components/api/api'
import Article from '../../components/Article/Article'
import Navbar from '../../components/Article/Navbar'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'

const index = (props) => {

    // const router = useRouter()

    // const { url } = router.query

    return (
        <div className="bg-white">
            <Navbar />
            <div className="mt-32">
                <Article url={props.url} />
            </div>
            <Contact />
            <Footer />
        </div>
    )
}

export async function getStaticPaths() {

    const { data } = await axios.get(`${api()}/api/articles`)

    const paths = data.articles ?  data.articles.map(items => {
        return {params: { url: items.url }}
    }) : {
        params: { url: []}
    }

    return { paths: paths, fallback: true, }

}

export async function getStaticProps({params}){

    return{
        props:{
            url: params.url
        }
    }
}

export default index

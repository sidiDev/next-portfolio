import axios from 'axios'
import api from '../../components/api/api'
import Article from '../../components/Article/Article'
import Navbar from '../../components/Article/Navbar'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'

const index = (props) => {


    return (
        <div className="bg-white">
            <Navbar />
            <div className="">
                <Article data={props.data} />
            </div>
            <Contact />
            <Footer />
        </div>
    )
}

export async function getStaticPaths () {

    const { data } = await  axios.get(`${api()}/api/articles`)

    const paths = data.articles.length > 0 ? data.articles.map(items => {
        return { params: { url: items.url } }
    }) : {
        params: {url: ''}
    }

    return { paths, fallback: 'blocking', }
}

export async function getStaticProps({ params }) {

    const { data } = await axios.get(`${api()}/api/article/${params.url}`)
    
    return {
        props: { data },
	    revalidate: 1
    }
}

// export async function getServerSideProps ({query}) {

//     const { url } = query
//     const { data } = await axios.get(`${api()}/api/article/${url}`)

//     return {
//         props: {
//             article: data
//         }
//     }
// }

export default index

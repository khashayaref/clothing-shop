 import Categories from '../components/Categories'
 import Post from '../components/Post'
 import { Container } from 'react-bootstrap'
 import Carousel from '../components/Carousel'
 import './Home.css'
 import { useState, useEffect} from 'react'
import NewsLetter from '../components/NewsLetter'


const Home = (props) => {
    const [posts, setPost] = useState([
        {
            abstract : "every thing is fine",
            img : require("../assets/images/post1.jpg")
        },
        {
            abstract : "every thing is fine",
            img : require("../assets/images/post2.jpg")
        },
        {
            abstract : "every thing is fine",
            img : require("../assets/images/post3.jpg")
        }
    ])

    const allPosts = posts.map((post, index) => {
        return (
            <Post abstract= {post.abstract} img= {post.img} key={index} number = {index}></Post>
        )
    })
    return(
        <Container>
            <Categories></Categories>
            <h3 className="titles">فوق العاده های فصل</h3>
            <Carousel></Carousel>
            <h3 className="titles">تازه های مد و پوشاک</h3>
            { allPosts }
            <NewsLetter></NewsLetter>
        </Container>
    )
}

export default Home
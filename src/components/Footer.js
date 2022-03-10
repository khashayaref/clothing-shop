import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { FaSearch } from 'react-icons/fa'
import PamPokh from '../assets/images/pampokh-fa.svg'
import Logo from '../assets/images/logo.svg'

import './Footer.css'

const Footer = (props) => {
    const[search, setSearch] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if(!search) {
            console.log('empty')
            return
        }
        console.log(search)
        setSearch('')
    }

    return(
        <Container fluid className="footer">
            <Row className="pt-4">
                <Col>
                    <form className="search-footer-form" onSubmit= {onSubmit}>
                        <button type="submit"><FaSearch></FaSearch></button>
                        <input name="search" placeholder="جستجو..." value={search} 
                        onChange={(e) => setSearch(e.target.value) }></input>
                    </form>
                </Col>
                <Col>
                    <div className="brand-footer">
                        <img src= {Logo} className="first-img" width="200px"></img>
                        <img src= {PamPokh} className="second-img" width="100px"></img>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h5 className="title-product-footer">محصولات</h5>
                    <div className="product-items">
                        <div>شلوار</div>
                        <div>تی شرت</div>
                        <div>تاپ</div>
                        <div>شلوارک</div>
                    </div>
                </Col>
                <Col>
                    <span className="text-fa-footer"><img src={PamPokh}></img></span>
                    <div className="website-items">
                        <div>قوانین و مقرارت</div>
                        <div>تماس با ما</div>
                        <div>بهترین دنبال کنندگان ما</div>
                    </div>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}

export default Footer
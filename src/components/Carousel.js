
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useState, useEffect } from 'react';
import './Carousel.css'
import NextArrow from '../assets/images/right-arrow.svg'
import PrevArrow from '../assets/images/left-arrow.svg'
import { Container,Row } from "react-bootstrap";


const Carousel = (props) => {

    const [products, setProducts] = useState([
        {
            src : require('../assets/images/majlesi1.jpg'),
            price : 2000,
            discountPrice : 1900,
            discribe : "عالی",
            title : "مجلسی"
        },
        {
            src :require('../assets/images/majlesi2.jpg'),
            price : 2000,
            discountPrice : 1900,
            discribe : "عالی",
            title : "مجلسی"
        },
        {
            src : require('../assets/images/majlesi3.jpg'),
            price : 2000,
            discountPrice : 1900,
            discribe : "عالی",
            title : "مجلسی"
        }
    ])

    

    const RightArrow = (props) => {
        const {onClick , style , className } = props
        
        return (
            <div className="" onClick = {onClick} 
            style = {{...style, position : "absolute" , top: "40%" , right : "8%", cursor : "pointer",zIndex : "5"}}>
                <img src={NextArrow}></img>
            </div>
        )
    }

    const LeftArrow = (props) => {
        const {onClick , style , className } = props
        return (
            <div className="" onClick = {onClick} 
            style = {{...style, position : "absolute" , top: "40%" , left : "8%", cursor : "pointer" , zIndex : "5"}}>
                <img src={PrevArrow}></img>
            </div>
        )
    }

    const sliders = products.map( (product,index) => {
        return (
         
            <div className="sliders" key = {index}>
                <div className="each_slider">
                    <img src={product.src.default} alt={ product.title } width= "130px" height="auto"/>
                    <div className="content">
                        <h5 className="d-block">{ product.title }</h5>
                        <span className="d-block">{ product.discribe}</span>
                        <p className="d-inline-block" style = {product.discountPrice && {textDecoration:"line-through"}}>{ product.price }</p>
                        {product.discountPrice ? <strong>{ product.discountPrice }</strong> : null}
                    </div>
                </div>
            </div>

            
        )
    })

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: <RightArrow/>,
        prevArrow: <LeftArrow/>,
      };
    return(

        <div className="parent-slider">
            <Slider {...settings}>
                {sliders}
            </Slider>
        </div>        
    )
}

export default Carousel
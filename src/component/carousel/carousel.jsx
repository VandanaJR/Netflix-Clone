import React from "react";
import Slider from "react-slick";
import TrendingCard from "../trendingcard/trendingcard";
import './carousel.styles.scss'

const Carousel = (props)=>{

        const settings = {
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 300,
          autoplaySpeed: 1750,
          cssEase: "ease-out"
        };
        return (
          <div className="carousel" >
            
            <Slider {...settings}>
             { props.trending.map(show => <TrendingCard key={show.id} show={show}/>)}
            </Slider>
          </div>
        );
      
}
export default Carousel
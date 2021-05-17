import React from "react";
import Slider from "react-slick";
import MobileTrendingCard from "../mobile-trendingcard/mobile-trendingcard";
import './mobile-carousel.styles.scss'

const MobileCarousel = (props)=>{

        const settings = {
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 300,
          autoplaySpeed: 2500,
          cssEase: "ease-out"
        };
        return (
          <div className="mobile-carousel" >
            
            <Slider {...settings}>
             { props.trending.map(show => <MobileTrendingCard key={show.id} show={show}/>)}
            </Slider>
          </div>
        );
      
}
export default MobileCarousel
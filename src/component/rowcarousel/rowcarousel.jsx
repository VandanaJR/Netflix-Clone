import React, { Component } from "react"
import ReactDOM from 'react-dom'
import Slider from "react-slick"
import RowCard from '../rowcard/rowcard'
import './rowcarousel.styles.scss'

export default class RowCarousel extends Component { 
  constructor(props) {
    super(props);
    this.handleWheel = this.handleWheel.bind(this);
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this).addEventListener('wheel', this.handleWheel);
  }

  componentWillUnmount() {
    ReactDOM.findDOMNode(this).removeEventListener('wheel', this.handleWheel);
  }

  handleWheel(e) {
    e.preventDefault();
    e.deltaY > 0 ? this.slider.slickNext() : this.slider.slickPrev();
  }
render(){
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5.1,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1720,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 4,
          infinite: false,
          dots: false
        }
      },
      
      {
        breakpoint: 1560,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 2
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3.8,
          slidesToScroll: 3,
          initialSlide: 2
        }
      },
      {
          breakpoint: 1140,
          settings: {
            slidesToShow: 3.2,
            slidesToScroll: 3,
            initialSlide: 2
          }
        },
      {
          breakpoint: 950,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 2
          }
        },
        
      {
          breakpoint: 850,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        
        {
            breakpoint: 750,
            settings: {
              slidesToShow: 3.1,
              slidesToScroll: 3,
              initialSlide: 2
            }
          },
        
          {
              breakpoint: 670,
              settings: {
                slidesToShow: 3.5,
                slidesToScroll: 3,
                initialSlide: 2
              }
            },
        
          {
              breakpoint: 570,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 2
              }
            },
        
            {
                breakpoint: 490,
                settings: {
                  slidesToShow: 2.2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
        
          {
              breakpoint: 355,
              settings: {
                slidesToShow: 1.8,
                slidesToScroll: 1,
                initialSlide: 2
              }
            }
    ]
  };

        
        return (
          <div className="row-carousel" >
            
            <Slider  ref={slider => this.slider = slider } {...settings}>
             { this.props.popularMovies.map(show => <RowCard key={show.id} show={show}></RowCard>)}
            </Slider>
          </div>
        );
      
}
}

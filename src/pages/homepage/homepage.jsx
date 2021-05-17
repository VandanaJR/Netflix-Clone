import React from 'react'
import './homepage.styles.scss'
import {useSelector} from 'react-redux'
import Carousel from '../../component/carousel/carousel'
import MobileCarousel from '../../component/mobile-carousel/mobile-carousel'
import {ReactComponent as Logo} from '../../component/assets/netflix.svg'
const HomePage=()=>{
    const series = useSelector(state => state.rootReducer.showsData.popularSeries)
    const movies = useSelector(state => state.rootReducer.showsData.popularMovies)
    //console.log(state.results)
    let topSeries
    if(series.results) topSeries=series.results.slice(0,3)
    let topMovies
    if(movies.results) topMovies=movies.results.slice(0,3)
    let trending
    if(topSeries && topMovies) trending = topSeries.concat(topMovies)
    //console.log(trending)
    return(
        <div className="homepage">
            <div className="mobile-logo">
                <Logo style={{width:"35px",height:"35px",marginTop:"20px"}}></Logo>
            </div>
            {
                trending ? <Carousel className="carousel" trending={trending}/> :<div>Loading</div>
                
            }
            {
                trending ? <MobileCarousel className="carousel" trending={trending}/> :<div>Loading</div>
                
            }
        </div>
    )

}

export default HomePage
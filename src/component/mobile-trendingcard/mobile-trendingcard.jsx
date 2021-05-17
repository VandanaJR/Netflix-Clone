import React from 'react'
import './mobile-trendingcard.styles.scss'
import { Link } from 'react-router-dom'


const MobileTrendingCard =(props)=>{
    //console.log(props.show)
    const {name,title,vote_average,release_date,backdrop_path,first_air_date}=props.show
    //console.log(release_date)
    let releaseYearMovie= new Date(release_date).getFullYear()
    let releaseYearSeries= new Date(first_air_date).getFullYear()
    //console.log(releaseYear)
    let to 
    if(props.show.hasOwnProperty('name')) to = `/tv/${props.show.id}`
    else if(props.show.hasOwnProperty('title')) to = `/movie/${props.show.id}`
    return(
        <div className="mobile-trending-card">
            <div className="mobile-trending-info" style={{width:"100%",height:"40%"}}>
                <div className="mobile-trending-info-container">
                    <h1 className="mobile-show-name">{name || title}</h1>
                    <p className="mobile-show-ratings">Ratings: <span style={{color:"#e5c558"}}>{vote_average}</span>/10</p>
                    <p className="mobile-show-release-year">{releaseYearMovie || releaseYearSeries }</p>
                    <Link to={to} style={{textDecoration:"none"}}><button className="mobile-see-more-btn" >See More</button></Link>
                </div>   
            </div>
            <div className="mobile-trending-poster" style={{width:"100%",height:"60%",backgroundImage:`url(https://image.tmdb.org/t/p/original/${backdrop_path})`}}>
              <div style={{width:"100%",height:"100%",background:"linear-gradient(0deg, rgba(8,8,8,1) 4%, rgba(0,0,0,0.2721463585434174) 30%, rgba(84,81,81,0.11808473389355745) 51%)"}}></div> 
            </div>
        </div>
    )
}

export default MobileTrendingCard
import React from 'react'
import './trendingcard.styles.scss'
import StarIcon from '@material-ui/icons/Star'
import { Link } from 'react-router-dom'


const TrendingCard =(props)=>{
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
        <div className="trending-card">
            <div className="trending-info" style={{width:"40%",height:"90vh"}}>
                <div className="trending-info-container">
                    <h1 className="show-name">{name || title}</h1>
                    <div className="show-ratings"><StarIcon style={{color:"#e5c558"}}></StarIcon><p >{vote_average}</p></div>
                    <p className="show-release-year">{releaseYearMovie || releaseYearSeries }</p>
                    <Link to={to} style={{textDecoration:"none"}}><button className="see-more-btn" >See More</button></Link>
                </div>   
            </div>
            <div className="trending-poster" style={{width:"60%",height:"90vh",backgroundImage:`url(https://image.tmdb.org/t/p/original/${backdrop_path})`}}>
              <div style={{width:"100%",height:"100%",background:"linear-gradient(90deg, rgba(8,8,8,1) 4%, rgba(0,0,0,0.2721463585434174) 30%, rgba(84,81,81,0.11808473389355745) 51%)"}}></div> 
            </div>
        </div>
    )
}

export default TrendingCard

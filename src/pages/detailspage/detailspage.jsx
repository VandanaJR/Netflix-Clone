import React from 'react'
import './detailspage.styles.scss'
import { withRouter } from "react-router"
import Data from '../../component/fetchData'
import StarIcon from '@material-ui/icons/Star'
import {ReactComponent as Logo} from '../../component/assets/netflix.svg'
import Content from '../../component/readmore/readmore'


const DetailsPage=({location})=>{
    //console.log(location)
    const details = Data(`https://api.themoviedb.org/3${location.pathname}?api_key=cc2fb3ff7a3f08fdce255d99bb879831`)
    console.log(details)
    const {poster_path,genres,overview,title,vote_average,original_language,release_date,first_air_date,runtime,episode_run_time,name,}=details
    let releaseYearMovie= new Date(release_date).getFullYear()
    let releaseYearSeries= new Date(first_air_date).getFullYear()
    //console.log(created_by)
    return(
        <div className="detailspage">
            <div className="mobile-logo">
                <Logo style={{width:"35px",height:"35px",marginTop:"20px"}}></Logo>
            </div>
            <div className="detailspage-container">
                <div className="details-info">
                    <div className="detail-name-star">
                        <h1 className="detail-show-name">{title || name}</h1>
                        <div className="show-ratings"><StarIcon style={{color:"#e5c558"}}></StarIcon><p >{vote_average}</p></div>
                    </div>
                    
                    <div className="year-time-lang">
                        <p className="detail-release-year">{releaseYearMovie || releaseYearSeries }</p>
                        <p className="divider">|</p>
                        <p className="detail-run-time">{runtime||episode_run_time} min</p>
                        <p className="divider">|</p>
                        <p className="language" style={{textTransform:"uppercase"}}>{original_language}</p>
                    </div>
                    
                    <div className="detail-overview">
                        <h3>Overview</h3>
                        <div className="line"></div>
                        {overview? <div className="overview"><Content description={overview}></Content></div> :null}
                        { genres ? <p className="genres"><span style={{color:"rgba(251, 251, 251, 0.609)"}}>Genre:</span> {genres.length? genres[0].name:"Not defined"}</p> : null}
                    </div>
                </div>
                <div className="details-poster" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${poster_path})`}}>
                </div>
            </div>   
        </div>
    )
}

export default withRouter(DetailsPage)
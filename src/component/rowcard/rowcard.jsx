import React from 'react'
import './rowcard.styles.scss'
import {ReactComponent as Logo} from '../assets/netflix.svg'
import { Link } from 'react-router-dom'

const RowCard = (props)=>{
    //console.log(props.show)
    let to 
    if(props.show.hasOwnProperty('name')) to = `/tv/${props.show.id}`
    else if(props.show.hasOwnProperty('title')) to = `/movie/${props.show.id}`
    return(
        <Link to={to} style={{textDecoration:"none"}}>
            <div className="row-card" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${props.show.backdrop_path})`}}>
                <div className="row-card-container">
                <Logo style={{ width:"40px",marginTop:"10px"}}></Logo>
                <p>{props.show.name || props.show.title}</p>
                </div>
            </div>
        </Link>
       
    )
}

export default RowCard
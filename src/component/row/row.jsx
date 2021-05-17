import React from 'react'
import './row.styles.scss'
import RowCarousel from '../rowcarousel/rowcarousel'




const Row=(props)=>{
    //console.log(props.popularMovies)
    return(
        <div className="row" >
           <div className="row-container">
               <p>{props.name}</p>
               <RowCarousel  popularMovies={props.popularMovies}></RowCarousel>
               </div>
        </div>
    )

}

export default Row
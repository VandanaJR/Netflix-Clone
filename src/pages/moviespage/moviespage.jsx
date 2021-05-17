import React from 'react'
import './moviespage.styles.scss'
import {useSelector} from 'react-redux'
import Data from '../../component/fetchData'
import request from '../../component/fetchRequestType'
import Row from '../../component/row/row'





const MoviesPage=()=>{
   
    const moviesPopular = useSelector(state => state.rootReducer.showsData.popularMovies)
    const moviesNowPlaying= Data(request.fetchNowPlayingMovies)
    const moviesUpComing= Data(request.fetchUpcomingMovies)
    console.log(moviesUpComing)
    let popularMovies=moviesPopular.results
    let nowPlayingMovies=moviesNowPlaying.results 
    let upComingMovies=moviesUpComing.results
    //console.log(upComingMovies)
    
    return(
        <div className="moviepage" >
            
            {popularMovies?<Row  name="Popular Movies" popularMovies={popularMovies}></Row>:null}
            {nowPlayingMovies?<Row name="Now Playing" popularMovies={nowPlayingMovies}></Row>:null}
            {upComingMovies?<Row name="Up Coming" popularMovies={upComingMovies}></Row>:null}            
        </div>
    )

}

export default MoviesPage


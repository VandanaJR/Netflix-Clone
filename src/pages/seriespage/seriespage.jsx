import React from 'react'
import './seriespage.styles.scss'
import {useSelector} from 'react-redux'
import Data from '../../component/fetchData'
import request from '../../component/fetchRequestType'
import Row from '../../component/row/row'

const SeriesPage=()=>{
    const seriesPopular = useSelector(state => state.rootReducer.showsData.popularSeries)
    const seriesNowPlaying= Data(request.fetchNowPlayingSeries)
    const seriesUpComing= Data(request.fetchUpcomingSeries)
    let popularSeries=seriesPopular.results
    let nowPlayingSeries=seriesNowPlaying.results 
    let upComingSeries=seriesUpComing.results
    return(
        <div className="moviepage">
            {popularSeries?<Row name="Popular Series" popularMovies={popularSeries}></Row>:null}
            {nowPlayingSeries?<Row name="Now Playing" popularMovies={nowPlayingSeries}></Row>:null}
            {upComingSeries?<Row name="Up Coming" popularMovies={upComingSeries}></Row>:null}            
        </div>
    )
}

export default SeriesPage
import React from 'react'
import './sidenav.styles.scss'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import {ReactComponent as Logo} from '../assets/netflix.svg'
import HomeIcon from '@material-ui/icons/Home'
import MovieIcon from '@material-ui/icons/Movie'
import TvIcon from '@material-ui/icons/Tv'
import SearchIcon from '@material-ui/icons/Search'
import { IconButton } from '@material-ui/core'
import Tooltip from '@material-ui/core/Tooltip'

//Imports for Data Fetch
import Data from '../fetchData'
import request from '../fetchRequestType'

//Imports for Redux
import {useDispatch, useSelector} from 'react-redux'
import {setPopularMovies, setPopularDramas} from '../../state/shows-data'
import {setPage} from '../../state/homepage'

const SideNav = ()=>{

    const dispatch = useDispatch()
    
    const popularMovies= Data(request.fetchPopularMovies)
    const popularSeries= Data(request.fetchPopularSeries)
    dispatch(setPopularMovies(popularMovies))
    dispatch(setPopularDramas(popularSeries))
    
    //const statePopularDramas = useSelector(state => state.rootReducer.showsData.popularDramas)
    //console.log(statePopularDramas)

    const home = useSelector(state => state.rootReducer.homePage.home)
    const movies = useSelector(state => state.rootReducer.homePage.movies)
    const tv = useSelector(state => state.rootReducer.homePage.tv)
    const search = useSelector(state => state.rootReducer.homePage.search)
    const location = useLocation().pathname
    //console.log(tv)
    const handleClick= (e)=>{
        let target= e.currentTarget.attributes['name'].value
        //console.log(e.target)
        
        if(target === "home" && location ==='/' ){
            dispatch(setPage(target))
        }
        else if(target==="movies" && location ==='/movies' ){
            dispatch(setPage(target))
        }
        else if(target==="tv" && location ==='/series' ){
            dispatch(setPage(target))
        }
        else if(target==="search" && location ==='/search' ){
            dispatch(setPage(target))
        }
        
    }
    return(
        <div className="sidenav-container">
            <Logo  style={{width:"40px",height:"40px"}}></Logo>  

            <Link to="/">
                <Tooltip  title="Home">
                    <IconButton name="home" onClick={(e)=>handleClick(e)}>
                    { 
                    home && location ==='/'?
                    <HomeIcon style={{color:"#e75a61"}} ></HomeIcon>
                    :
                    <HomeIcon className="nav-icon" ></HomeIcon>
                    }
                    </IconButton>
                </Tooltip>
            </Link>
            

            <Link to="/movies">
                <Tooltip  title="Movies">
                    <IconButton name="movies" onClick={(e)=>handleClick(e)}>
                    { 
                    movies || location ==='/movies'?
                    <MovieIcon style={{color:"#e75a61"}} ></MovieIcon>
                    :
                    <MovieIcon className="nav-icon" ></MovieIcon>
                    }
                    </IconButton>
                </Tooltip>
            </Link>
            


            <Link to="/series">
                <Tooltip  title="TV">
                    <IconButton name="tv" onClick={(e)=>handleClick(e)}>
                    { 
                    tv || location ==='/series'?
                    <TvIcon style={{color:"#e75a61"}} ></TvIcon>
                    :
                    <TvIcon className="nav-icon" ></TvIcon>
                    }
                    </IconButton>
                </Tooltip>
            </Link>
            


            <Link to="/search">
                <Tooltip  title="Search">
                    <IconButton name="search" onClick={(e)=>handleClick(e)}>
                    { 
                    search || location ==='/search'?
                    <SearchIcon style={{color:"#e75a61"}} ></SearchIcon>
                    :
                    <SearchIcon className="nav-icon" ></SearchIcon>
                    }
                    </IconButton>
                    </Tooltip>
                </Link>
           
        </div>
    )
}

export default SideNav
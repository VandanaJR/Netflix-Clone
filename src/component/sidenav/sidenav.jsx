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
import {useDispatch} from 'react-redux'
import {setPopularMovies, setPopularDramas} from '../../state/shows-data'


const SideNav = ()=>{

    const dispatch = useDispatch()
    
    const popularMovies= Data(request.fetchPopularMovies)
    const popularSeries= Data(request.fetchPopularSeries)
    dispatch(setPopularMovies(popularMovies))
    dispatch(setPopularDramas(popularSeries))
    
    //const statePopularDramas = useSelector(state => state.rootReducer.showsData.popularDramas)
    //console.log(statePopularDramas)

   
    const location = useLocation().pathname

   
    return(
        <div className="sidenav-container">
            <Logo  style={{width:"40px",height:"40px"}}></Logo>  

            <Link to="/">
                <Tooltip  title="Home">
                    <IconButton name="home">
                    { 
                    location ==='/'?
                    <HomeIcon style={{color:"#e75a61"}} ></HomeIcon>
                    :
                    <HomeIcon className="nav-icon" ></HomeIcon>
                    }
                    </IconButton>
                </Tooltip>
            </Link>
            

            <Link to="/movies">
                <Tooltip  title="Movies">
                    <IconButton name="movies">
                    { 
                   location ==='/movies'?
                    <MovieIcon style={{color:"#e75a61"}} ></MovieIcon>
                    :
                    <MovieIcon className="nav-icon" ></MovieIcon>
                    }
                    </IconButton>
                </Tooltip>
            </Link>
            


            <Link to="/series">
                <Tooltip  title="TV">
                    <IconButton name="tv" >
                    { 
                    location ==='/series'?
                    <TvIcon style={{color:"#e75a61"}} ></TvIcon>
                    :
                    <TvIcon className="nav-icon" ></TvIcon>
                    }
                    </IconButton>
                </Tooltip>
            </Link>
            


            <Link to="/search">
                <Tooltip  title="Search">
                    <IconButton name="search" >
                    { 
                    location ==='/search'?
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
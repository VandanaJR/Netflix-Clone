import React from 'react'
import './mobile-nav.styles.scss'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home'
import MovieIcon from '@material-ui/icons/Movie'
import TvIcon from '@material-ui/icons/Tv'
import SearchIcon from '@material-ui/icons/Search'
import { IconButton } from '@material-ui/core'

//Imports for Redux
import {useDispatch, useSelector} from 'react-redux'
import {setPage} from '../../state/homepage'

const MobileNav = ()=>{

    const dispatch = useDispatch()

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
        <div className="mobilenav-container">
            <div className="nav">
                
                <Link to="/">
                <IconButton name="home" onClick={(e)=>handleClick(e)}>
                { 
                home && location ==='/'?
                <HomeIcon style={{color:"#e75a61"}} ></HomeIcon>
                :
                <HomeIcon className="nav-icon" ></HomeIcon>
                }
                </IconButton>
            </Link>
            

            <Link to="/movies">
                <IconButton name="movies" onClick={(e)=>handleClick(e)}>
                { 
                movies || location ==='/movies'?
                <MovieIcon style={{color:"#e75a61"}} ></MovieIcon>
                :
                <MovieIcon className="nav-icon" ></MovieIcon>
                }
                </IconButton>
            </Link>
            


            <Link to="/series">
                <IconButton name="tv" onClick={(e)=>handleClick(e)}>
                { 
                tv || location ==='/series'?
                <TvIcon style={{color:"#e75a61"}} ></TvIcon>
                :
                <TvIcon className="nav-icon" ></TvIcon>
                }
                </IconButton>
            </Link>
            


            <Link to="/search">
                <IconButton name="search" onClick={(e)=>handleClick(e)}>
                { 
                search || location ==='/search'?
                <SearchIcon style={{color:"#e75a61"}} ></SearchIcon>
                :
                <SearchIcon className="nav-icon" ></SearchIcon>
                }
                </IconButton>
            </Link>
            </div>
            
        </div>
    )
}

export default MobileNav
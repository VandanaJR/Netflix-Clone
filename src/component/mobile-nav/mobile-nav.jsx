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



const MobileNav = ()=>{

    const location = useLocation().pathname
 
    return(
        <div className="mobilenav-container">
            <div className="nav">
                
                <Link to="/">
                <IconButton name="home" >
                { 
                location ==='/'?
                <HomeIcon style={{color:"#e75a61"}} ></HomeIcon>
                :
                <HomeIcon className="nav-icon" ></HomeIcon>
                }
                </IconButton>
            </Link>
            

            <Link to="/movies">
                <IconButton name="movies" >
                { 
               location ==='/movies'?
                <MovieIcon style={{color:"#e75a61"}} ></MovieIcon>
                :
                <MovieIcon className="nav-icon" ></MovieIcon>
                }
                </IconButton>
            </Link>
            


            <Link to="/series">
                <IconButton name="tv" >
                { 
                location ==='/series'?
                <TvIcon style={{color:"#e75a61"}} ></TvIcon>
                :
                <TvIcon className="nav-icon" ></TvIcon>
                }
                </IconButton>
            </Link>
            


            <Link to="/search">
                <IconButton name="search">
                { 
               location ==='/search'?
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
import React from 'react'
import './searchpage.styles.scss'
import {withStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import SearchIcon from '@material-ui/icons/Search'
import { withRouter } from "react-router"
import Data from '../../component/fetchData'
import RowCard from '../../component/rowcard/rowcard'



  
  const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#e75a61',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#e75a61',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#e75a61',
        },
        '&:hover fieldset': {
          borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#e75a61',
        },
      },
    },
  })(TextField);
  
  
  
const SearchPage = ({location})=>{
    const [searchQuery, setSearchQuery]= React.useState(null)
    //console.log(location)
    const handleChange=(e)=>{
        e.preventDefault()
        let query= e.target.value
        console.log(query)
        setSearchQuery(query)
        
    }

    let finalQuery 
    if(searchQuery) finalQuery =searchQuery.split(' ').join('%20')
    //console.log(finalQuery)
    //console.log(`https://api.themoviedb.org/3${location.pathname}/keyword?api_key=cc2fb3ff7a3f08fdce255d99bb879831&query=${finalQuery}`)
    let info = Data(`https://api.themoviedb.org/3${location.pathname}/movie?api_key=cc2fb3ff7a3f08fdce255d99bb879831&query=${finalQuery}&page=1`)
    //https://api.themoviedb.org/3/search/movie?api_key=cc2fb3ff7a3f08fdce255d99bb879831
    console.log(info)
    const onKeyPress =(event)=> {
        if (event.which === 13 /* Enter */) {
          event.preventDefault();
        }
    }
    return(
        <div className="searchpage">
            <div className="searchpage-container">
            
            <div className="search-bar">
                <form  noValidate onKeyPress={onKeyPress}>
                    <SearchIcon style={{color:"white",marginRight:"20px",marginTop:"20px"}}></SearchIcon>
                    <CssTextField id="custom-css-standard-input" label="Search" onInput={(e)=>handleChange(e)} />
                </form>
            </div>
            {searchQuery?<h2 style={{color:"white",marginLeft:"20px",marginBottom:"20px"}}>Search results for: {searchQuery}</h2>:null}
            <div className="search-results">
                { info.results && searchQuery ? info.results.slice(0,4).map(result=><div style={{margin:"10px"}}> <RowCard key={result.id} show={result}></RowCard></div>) :null }
                
              
            </div>
            </div>
        </div>
    )
}

export default withRouter(SearchPage)
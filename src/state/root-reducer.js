import {combineReducers} from 'redux'
import showDataReducer from './shows-data'
import HomePageReducer from './homepage'

 export default combineReducers({
   showsData :showDataReducer, 
   homePage: HomePageReducer
})



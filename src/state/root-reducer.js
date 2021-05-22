import {combineReducers} from 'redux'
import showDataReducer from './shows-data'

 export default combineReducers({
   showsData :showDataReducer, 
})



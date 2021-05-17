import {createSlice} from '@reduxjs/toolkit'
import {createSelector} from 'reselect'

const slice = createSlice(
    {
        name:"showsData",
        initialState:{
            popularMovies:null,
            popularSeries:null
        },
        reducers:{
            setPopularMovies:(state,action)=>{
                state.popularMovies=action.payload
            },
            setPopularDramas:(state,action)=>{
                state.popularSeries=action.payload
            }
        }
    }
)

export const {setPopularMovies,setPopularDramas} = slice.actions
export default slice.reducer

export const selectTopSeries =createSelector(
    state =>  state.popularSeries,
    topSeries => topSeries.results.slice(0,3)
  )
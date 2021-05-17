import {createSlice} from '@reduxjs/toolkit'


const slice = createSlice(
    {
        name:"homepage",
        initialState:{
            home:true,
            movies:false,
            tv:false,
            search:false
        },
        reducers:{
            setPage:(state,action)=>{
                for(let key in state){
                  if(key === action.payload) state[key]=true
                  else state[key] = false
                }
            }
        }
    }
)

export const {setPage} = slice.actions
export default slice.reducer


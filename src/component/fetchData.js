import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

  
const  Data = (request) =>{
    
    const fetchURL= request
    console.log(fetchURL)
    const { data, error} = useSWR(fetchURL,fetcher,{
        revalidateOnFocus : false
    })
  
    if (error) return "failed to load"
    if (!data) return "loading..."
  
    // render data
    return data
  }

export default Data


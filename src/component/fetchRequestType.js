const API_KEY ="cc2fb3ff7a3f08fdce255d99bb879831"
const request = {
    fetchPopularMovies:`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
    fetchNowPlayingMovies: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`,
    fetchUpcomingMovies:`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`,
    fetchPopularSeries:`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`,
    fetchNowPlayingSeries:`https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}`,
    fetchUpcomingSeries:`https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}`
    
}

export default request
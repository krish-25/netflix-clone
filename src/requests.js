// const API_KEY = "d05cea2e9a02a25daade0a681dda1e40";

const requests = {
    fetchTrending: '/trending/all/week?api_key=d05cea2e9a02a25daade0a681dda1e40&language=en-US',
    fetchNetflixOriginals: '/discover/tv?api_key=d05cea2e9a02a25daade0a681dda1e40&with_networks=213',
    fetchTopRated: '/movie/top_rated?api_key=d05cea2e9a02a25daade0a681dda1e40&language=en-US',
    fetchActionMovies: '/discover/movie?api_key=d05cea2e9a02a25daade0a681dda1e40&with_genres=28',
    fetchComedyMovies: '/discover/movie?api_key=d05cea2e9a02a25daade0a681dda1e40&with_genres=35',
    fetchHorrorMovies: '/discover/movie?api_key=d05cea2e9a02a25daade0a681dda1e40&with_genres=27',
    fetchRomanticMovies: '/discover/movie?api_key=d05cea2e9a02a25daade0a681dda1e40&with_genres=10749',
    fetchDocumentaries: '/discover/movie?api_key=d05cea2e9a02a25daade0a681dda1e40&with_genres=99',
}

export default requests;
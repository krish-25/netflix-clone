import React, {useState, useEffect} from 'react';
import axios from './axios';
import './Row.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original";

function Row({title,fetchURL,isLargeRow}){
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    // A snippet of code which runs based on a specific condition/variable
    useEffect(() => {
        // if [], run once when the row loads and don't run again
        // if [xyz], anytime this variable xyz changes then run this piece of code
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if(trailerUrl) {
            setTrailerUrl('');
        }else{
            movieTrailer(movie?.name || "").then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
            }).catch((error) => console.log(error));
        }
    }

    return(
        <div className="row">
            <h1>{title}</h1>
            <div className="row_posters">
                {movies.map((movie) => (
                    <img key={movie.id} onClick={() => handleClick(movie)} className={isLargeRow?"row_poster row_posterLarge":"row_poster"} src = {base_url+(isLargeRow?movie.poster_path:movie.backdrop_path)} alt={movie.name} />
                ))}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>      
    )
}

export default Row;
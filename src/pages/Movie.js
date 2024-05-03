import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";
import { generatePath } from "react-router-dom";
import { useParams } from "react-router-dom";

function Movie() {
    const params = useParams();
    const movieID = params.id;
    const [movie, setMovie] = useState("")
    const [genres, setGenres] = useState([])

    useEffect(() => {
      fetch(`http://localhost:4000/movies/${movieID}`)
      .then(r => r.json())
      .then(data => {
        setMovie(data)
        console.log(data.genres)
        setGenres(data.genres)})
    },[])

 console.log(genres)
const genresSpans = genres.map((genre) => (<span key={genre}>{genre}</span>))
console.log(genresSpans)

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1> 
          {movie.title} 
          </h1>
        <p>
          {movie.time}
        </p>
       {genresSpans}
      </main>
    </>
  );
};

export default Movie;

import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import "../pages/MovieGrid.css"
const action = import.meta.env.VITE_FILTRO
import '../pages/MovieGrid.css';
const Action = () =>{
    const [topMovies, setTopMovies] = useState([])
    const getActionMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setTopMovies(data.results)
    };
    useEffect(() =>{
        const actionUrl = `${action}?with_genres=28`
        getActionMovies(actionUrl)
    }, [])
    return(
        
        <div className="container">
            <h2 className="title">AÇÃO:</h2>
            <div className="movies-container">
            {topMovies.length === 0 && <p>Carregando...</p>}
            {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={with_genres}/>)}
            </div>
        </div>
    )
}
export default Action
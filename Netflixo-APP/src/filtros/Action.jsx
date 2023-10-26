
const Action = () =>{
    const [topMovies, setTopMovies] = useState([])
    const getTopRatedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setTopMovies(data.results)
    };
    useEffect(() =>{
        const topRatedURL = `${moviesURL}top_rated?${apiKey}`
        getTopRatedMovies(topRatedURL)
    }, [])
    return(
        
        <div className="container">
            <h2 className="title">Aventura:</h2>
            <div className="movies-container">
            {topMovies.length === 0 && <p>Carregando...</p>}
            {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    )
}
export default Action;
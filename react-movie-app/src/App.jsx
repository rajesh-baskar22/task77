import { useEffect,useState } from 'react'
import SearchIcon from "./search.svg"
import MovieCard from "./MovieCard";
import './App.css'
import Navbar from "./components/Navbar"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

const API_URL ='http://www.omdbapi.com/?apikey=495e6615';
function App() {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const searchMovies = async (title)=>
  {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

   setMovies(data.Search);
  }
  
  useEffect(()=>{
    searchMovies("Avengers");
  },[]);
  return (
   <Router>
    <div className="app">
    <h1>PrimeFlix Movies</h1> <i className="fa-brands fa-suse text-8xl text-blue-500"  ></i>
    <h3 className='  text-xl font-bold p-4 text-black-600 '>Home</h3>
    <h3 className='  text-xl font-bold p-4 text-black-600'>Movies</h3>
    <h3 className='  text-xl font-bold p-4 text-black-600'>Tv Shows</h3>
    <div className="search">
      <input placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} />

      <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
    </div>

    {movies?.length > 0 ? (
      <div className="container">
        {movies.map((movie) => (
          <MovieCard movie= {movie} />
         

        ))}
      </div>
    ) : (
      <div className="empty">
        <h2 className='text-3xl'>No Movies found</h2>
      </div>
    )}
        <Navbar />

  </div>
  </Router>
  )
}

export default App

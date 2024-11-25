import React from 'react'
import MovieSelect from './MovieSelect'

const MovieCard = ({ movie:{ imdbID, Year, Poster, Title,
     Type, } }) => {
    return (
       
           
      <div>
       
      
        <div className="movie"  key={imdbID} >
            <div>
                <p>{Year}</p>
                         
            </div>
            <div>
                <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
            
            </div>
            <div>
                <span>{Type}</span>
                    <h3>{Title}</h3>
                    <h3>{imdbID}</h3>
            </div>
            <div>
            <MovieSelect imdbID={imdbID}  Year={Year} Poster={Poster} Title={Title} Type={"Rating"}/>
        </div>         
        </div>

       

        </div>    

             
        
    )
}

export default MovieCard
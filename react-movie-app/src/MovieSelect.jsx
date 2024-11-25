import React from 'react'

function MovieSelect(imdbID,Year,Poster,Title,Type){
  
  return (
    
    <div>
      
   
      <div className='h-50 w-full container mx-auto'>
      <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Type} className='h-50 w-50 ' />
      <p>{Type}</p>
      
      </div>
    </div>
  )
}

export default MovieSelect

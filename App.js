import {useEffect, useState, React} from "react";
import "./App.css";
import SearchIcon from "./search.svg"
import MovieCard from "./MovierCard";




let API_URL = `https://www.omdbapi.com/?apikey=8236ff3e`;

const App = () => {
    


    const [movie, setMovies] = useState(); 
    const [value, setValue] = useState(""); // for search
    const searchMovies = async (title) => {
    
    const response = await fetch(`${API_URL}&s=${title}`); 
    const data = await response.json();
    
    setMovies(data.Search); // for seting the value from the search
    //console.log(data.Search);

    /*let ima2 = document.getElementById('search');

    ima2.addEventListener("click", function(){
        setValue(document.getElementById('txt').value);
        alert(value);
      });*/

  };

useEffect(() => {
    
    
    searchMovies("spiderman"); //default page will load up here
    

    
}, []);

    return(


        <div className = "app">
            
            <h1>Scott'O Movie</h1>

            <div className = "search">
                <input 
                type = "Serach for movies" id = "txt" value = {value} onChange = {(s) => setValue(s.target.value)}/>
                <img src = {SearchIcon} alt = "search" id = "search" onClick = {() => searchMovies(value)}></img>

        </div>

        {
        movie?.length > 0 ? (   //checking if its empty or not

        <div className="container">
          {
          movie.map((movie) => (
          <MovieCard movie={movie} /> // movie card component 
          ))}
          </div>

      ) : (

        <div className="empty">
          <h2>No movies found</h2>
        </div>
        
      )}
        </div>

 

    );

}


export default App;
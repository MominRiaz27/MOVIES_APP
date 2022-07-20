import React,{useState,useEffect} from "react";
import Movie from "./components/Movies";

const FEATURED_API="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
const IMAGE_API="https://image.tmdb.org/t/p/w1280"
const SEARCH_API="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="

function App() {
  const [movies,setMovies] = useState([]);
  useEffect(()=>{
    fetch(FEATURED_API)
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data);
      setMovies(data.results);
    },[]);
  })
  const handleonsubmit =(e)=>{
    e.preventDefault();
  }
  return (<>
 
    <header>
      <form onSubmit={handleonsubmit}>
        <input className="search" type="text" placeholder="Search..."></input>
      </form>
    </header>
    <div className="movie-container">
      {movies.length > 0 && movies.map((mov)=>(
         <Movie key={mov.id} {...mov}/>
      ))}
    </div>
    </>
  );
}

export default App;

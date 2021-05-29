import React, {useState} from 'react';
import MovieList from './component/Mlist';
import  Add  from "./component/Madd";
import Filter from './component/filter';
import './App.css';

function App({movies,setMovies}) {

  const [keyword,setKeyword] = useState("")
  const [rating, setRating] = useState(1)
  

  const  search=(text)=>{
    setKeyword(text)
  }
  
  const  handleRating=(numbre)=>{
    setRating(numbre)
  }
  
  const addMovie =(newMovie)=>setMovies([...movies,newMovie])
  
  return (
    
    <div className="App">
      
      <header className="App-header">
        
        <nav  className="nav">
          <h1 style={{color:"#FFC300" , fontFamily: "magnat", padding:10 , marginTop:5}} > MYCima</h1>
          <Add addMovie={addMovie} />
          <Filter style={{padding:10 , marginTop:5 }} search={search} handleRating={handleRating} />
          
        </nav>
        
        <div className="film">
          <MovieList movies={movies.filter( el=> el.title.toLowerCase().includes(keyword.toLowerCase().trim())&& el.rating >= rating)}></MovieList>
        </div>
        
      </header>
      
      
    </div>
  );
}

export default App;

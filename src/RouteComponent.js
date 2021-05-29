import React, { useState } from 'react'
import { Route, Switch } from 'react-router'
import App from './App'
import { v4 } from 'uuid';
import Description from './component/Description';



const  RouteComponent= () => {
    const [movies,setMovies]= useState ([
        {
          id:v4(),
          Poster: "https://fr.web.img5.acsta.net/pictures/19/06/18/12/11/3956503.jpg",
          title : "Breaking Bad",
          description : "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
          year : "2008" ,
          rating : 5 ,
          trailerUrl:"https://www.youtube.com/embed/lrcqbavlbyQ",
          
        } ,
    
        { id:v4(),
          Poster: " https://cdn.europosters.eu/image/750/plastic-frame-money-heist-la-casa-de-papel-i94548.jpg",
          title : " La casa de papel ",
          description : " An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
          year : " 2017" ,
          rating : 2 ,
          trailerUrl:"https://www.youtube.com/embed/To_kVMMu-Ls",
        } ,
    
        { id:v4(),
          Poster: "http://cdn.shopify.com/s/files/1/0799/0083/products/ANNE_WITH_AN_E_TO_300DPI_grande.jpg?v=1575939711",
          title : "Anne with an E ",
          description : "The adventures of a young orphan girl living in the late 19th century. Follow Anne as she learns to navigate her new life on Prince Edward Island, in this new take on L.M. Montgomery's classic novels.",
          year : "2017",
          rating: 1  ,
          trailerUrl:"https://www.youtube.com/embed/S5qJXYNNINo",
        } ,
    
        
        { id:v4(),
          Poster: "https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
          title : "The Sopranos",
          description : "New Jersey mob boss Tony Soprano deals with personal and professional issues in his home and business life that affect his mental state, leading him to seek professional psychiatric counseling.",
          year : "1999", 
          rating : 4 ,
          trailerUrl:"https://www.youtube.com/embed/u9qpFgAa52U",
        } ,
    
        
        { id:v4(),
          Poster: "https://i.pinimg.com/originals/9a/23/83/9a2383b8f04594a392ff5244e7b0ce28.jpg",
          title : "Chernobyl",
          description : "In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the world's worst man-made catastrophes.",
          year : "2019",
          rating: 5  ,
          trailerUrl:"https://www.youtube.com/embed/s9APLXM9Ei8",
        } ,
    
        { id:v4(),
          Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MjkwMTI0MV5BMl5BanBnXkFtZTcwODQwMTc0OQ@@._V1_UY1200_CR126,0,630,1200_AL_.jpg",
          title : "Dexter ",
          description : "By day, mild-mannered Dexter is a blood-spatter analyst for the Miami police. But at night, he is a serial killer who only targets other murderers.",
          year : "2008",
          rating: 3  ,
          trailerUrl:"https://www.youtube.com/embed/YQeUmSD1c3g",
        } ,
    
        { id:v4(),
          Poster: "https://i.pinimg.com/originals/0a/98/e3/0a98e309cbf49d4ff926d0370b07becd.jpg",
          title : "Narcos  ",
          description : "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.",
          year : "2015",
          rating: 4 ,
          trailerUrl:"https://www.youtube.com/embed/xl8zdCY-abw",
          
        } ,
    
        { id:v4(),
          Poster: "https://starzplay-img-prod-ssl.akamaized.net/474w/foxplus/PRISONBREAKY2005S01E001/PRISONBREAKY2005S01E001-474x677-PST.jpg",
          title : "Prison Break  ",
          description : "Due to a political conspiracy, an innocent man is sent to death row and his only hope is his brother, who makes it his mission to deliberately get himself sent to the same prison in order to break the both of them out, from the inside.",
          year : "2005",
          rating: 3  ,
          trailerUrl:"https://www.youtube.com/embed/der8A7Z9u7c",
        } ,
    
      ])
    return (
        <Switch>
            <Route exact path ='/' render={()=><App movies={movies} setMovies={setMovies}/>}></Route>
            <Route exact path ='/Test/:id' render={(props)=> <Description {...props} movies={movies}/> } />
        </Switch>

    )
}

export default RouteComponent

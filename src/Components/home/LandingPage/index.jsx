// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./style.css";
export default  function LandingPage (){


    const [movie,setMovies] =  useState([])
    // eslint-disable-next-line no-unused-vars
    const [ loading,setLoading] = useState(false )

    const [type,setType] = useState([]);


      useEffect(()=>{
        setLoading(true);
        axios.get(
            `https://imdb-api.com/en/API/${
                type!== "SearchMovie" ? "Top250TVs" : "Top250Movies"
              }/k_eczf0vgn`
        ).then((result)=>{
            console.log(result.data);
            setMovies(result.data.items)
            setLoading(false);
        })
        
      },[type])



      return (

          <div className="container">

            <button  onClick={()=>{
              setType('SearchMovie')
            }}>Movies</button>



            <button  onClick={()=>{
              setType('')
            }}>Series</button>

            
         {movie.map((el,index)=>{
            
            return (

                <div    className="main" key={index}  >                
                        <img     src={el.image}  />
                      <h2>{el.fullTitle}</h2>
                      <h3>{el.crew}</h3>
                      <p>{el.year}</p>
                      <p>{el.imDbRating} </p>
                </div>
            )
         })}


    
      </div>
      )}
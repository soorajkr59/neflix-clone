import React from 'react'
import { useEffect } from 'react';
import {Api_key}  from '../../constants/constants';
import './Banner.css';
import axios from '../Axios';
import { useState } from 'react';
import {imageUrl} from '../../constants/constants';
import YouTube from 'react-youtube';
import { ComedyMovies } from '../../urls';

function Banner(props) {
  const [movie,setMovie] = useState([]);
  const[urlId,setUrlId]=useState('');
  const [movieid,setMovieid]=useState([]) 
  

  let a;
  useEffect(()=>{
   axios.get(props.url).then((response)=>{
     a=Math.floor(Math.random() * 20);

    setMovie(response.data.results[a]);
    setMovieid(response.data.results[a].id)
 console.log(response.data.results[a].id);   })

  },[])
  console.log(movie)

  const opts = {
    height: "450",
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const movieclick=(id)=>
  {
    console.log(id);
    axios.get(`movie/${id}/videos?api_key=${Api_key}&language=`).then((response)=>{
       if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
        console.log(response.data.results[0]);

       }else{
        alert('trailer not availble');
        
       }
    })
  }
  
console.log(urlId)
  

  
  
  return (
    
    <div style={{backgroundImage:`url(${ movie ? imageUrl+movie.backdrop_path:""})`}}
     className='Banner'>
       { urlId && <YouTube  opts={opts} videoId={urlId.key} />}
   
        <div className='content'>
       
            <h3 className='title'>{movie ? movie.title:""}

            </h3>
            <div className='banner-button'>
            <button className='button' onClick={()=>movieclick(movieid)}>play</button>
           
           {/* { movie.map((obj)=>
                <button  onClick={()=>movieclick(obj.id)} className='button'>play</button>
           )} */}
                <button className='button'>My list</button>
            </div>
           
   
            <h3 className='discription'>{movie ? movie.overview:""}</h3>

        </div>
        <div className="fade-botton"></div>
       
    </div>
   
    
  )
}

export default Banner
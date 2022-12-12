import axios from '../Axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import './Card.css';
import {Api_key, imageUrl} from '../../constants/constants';
import Youtube from 'react-youtube';

export function Card(props) {
    const [movies,setMovies] = useState([])
    const[urlId,setUrlId]=useState('')
    useEffect(()=>{
     axios.get(props.url).then((response)=>{
      setMovies(response.data.results);
     })
  
    },[])
    const opts = {
        height: "390",
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
           }else{
            alert('trailer not availble');
           }
        })
      }
  return (
    
    <div className='row'>
        <h3>{props.title}</h3>
        <div className='posters'>
            {movies.map((obj)=>
                      <img onClick={()=>movieclick(obj.id)} className={props.isSmall ? 'small-poster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt='poster-image'/>
                     
            )}
          
            
        
              </div>
               { urlId && <Youtube  opts={opts} videoId={urlId.key} />}
   
       </div>

    

   
    
    
    
    
  )
}


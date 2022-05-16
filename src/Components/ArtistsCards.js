import React,{useState,useRef} from 'react'
import "../index.css"

import ArtistCard from './ArtistCard'
export default function ArtistCards({getAlbums,artists}) {
  
  
var im;
  const getArtistFirstName=(artistname)=>{
localStorage.setItem("name",artistname)
  }
  return (<>
   
    {artists.map(artist=>{
    artist.images.map((image,i)=>{if(i===0){ im=image.url;}})
    
      return <> <li class="cards_item" >
        <a onClick={()=>{getAlbums(artist.id);getArtistFirstName(artist.name)}}>
          <ArtistCard   id={artist.id} ArtistName={artist.name} 
          Followers={artist.followers.total} Image={`${im}`} ArtistPopularity={parseInt(artist.popularity)} /></a></li></>
    })}
    
   
 
  </>
  )
}
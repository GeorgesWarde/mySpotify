import React from 'react'

export default function AlbumCard(props) {
  
  
  return (
         
    <div class="card" >
        
    <div class="artistImage"><img src={props.Image}/></div>
 <div class="album_card_content">
     <div><h3 class="card_title">{props.AlbumName}</h3><p>{props.Artists[0].name}</p></div>
      <p class="card_text"> {props.ArtistName}</p>
   <p>{props.date}<br/>
      {props.tracks} tracks</p>
     
    </div>
    <div class="card-footer"><a href={props.url}>Preview on Spotify</a></div>
  
  </div>

  )
}
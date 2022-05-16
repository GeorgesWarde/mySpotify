import React,{useEffect} from 'react'
import "../index.css"
import AlbumCard from './AlbumCard'

export default function ArtistsAlbums({albums}) {
  var im;
  

return(<> <div class="main">  <ul class="cards">
  
     {albums.map(album=>{
      album.images.map((image,i)=>{if(i===0){ im=image.url;}})
   
     return <> <li class="cards_item"><AlbumCard  url={album.external_urls.spotify} Artists={album.artists} tracks={album.total_tracks} date={album.release_date} key={album.id} AlbumName={album.name} Image={`${im}`}/></li></>
    })}

</ul></div></>
)
    
    

}
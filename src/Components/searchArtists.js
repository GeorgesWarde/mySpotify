import React,{useState,useRef} from 'react'
import axios from 'axios';
import '../index.css'
import ArtistCards from './ArtistsCards';
import searchIcon from'../Images/searchIcon.png'
import ArtistsAlbums from './ArtistsAlbums';
export default function SearchArtists() {
    const [artists, setArtists] = useState([])
    const[albums,setAlbums]=useState()
    const inputName=useRef()
    const getArtists=()=>{ 
  
        const option2 = {
          method: 'GET',
          url: `https://api.spotify.com/v1/search/?q=name:${inputName.current.value}&type=artist`,
         
          headers: {
              'Authorization': `Bearer ${localStorage.getItem("myToken")}`,
              "Accept": "application/json",
              "Content-Type": "application/json",
          }
      }  
      axios(option2).then((response)=>{
        setArtists(response.data.artists.items)
      console.log(response.data.artists.items)
      
        
        
      });
    }
    const getAlbums=(id)=>{
    
        localStorage.setItem("isArtistChoosed","Yes")
        const option1 = {
          method: 'GET',
          url:`https://api.spotify.com/v1/artists/${id}/albums?include_groups=single`, 
         
          headers: {
              'Authorization': `Bearer ${localStorage.getItem("myToken")}`,
              "Accept": "application/json",
              "Content-Type": "application/json",
            
          }
      }  
      axios(option1).then((response)=>{
    
  
        setAlbums(response.data.items)
        
        console.log(response.data.items)
      })
      }
  return (
    <div>{!localStorage.getItem("isArtistChoosed")?<div><form class="centerView1">
<div class="imgIn">
    <input ref={inputName} type="text" id="enter" placeholder="Search for a artist"/>
    <a onClick={getArtists}><img class="img1" src={searchIcon}></img></a>
</div>
    </form>
    <div class="main"><ul class="cards">
        <ArtistCards getAlbums={getAlbums} artists={artists} />
        </ul></div>
    </div>:
    <><h1 class="centerView1">{localStorage.getItem("name")}</h1><div class="main"><ul class="cards">
        <ArtistsAlbums albums={albums}/></ul></div></>}
</div>  )
}

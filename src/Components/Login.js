import React,{useEffect} from 'react'
import "../index.css"

import SpotifyLogo from "../Images/spotify_logo.png"
export default function Login() {
  
    const client_id = "e2a143c817904d7b8ce7fa56041ab5d5";
const redirect_uri ="http://localhost:3000";
const api_uri = "https://accounts.spotify.com/authorize";
const scope = [
  "user-read-private",
  "user-read-email",
  "user-modify-playback-state",
  "user-read-playback-state",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-top-read",
  "user-follow-modify",
];
const RESPONSE_TYPE="token"
 
  
  
  return (
    <div class="centerView">
      <form>
    

    
    <div class="imgIn">
        <input type="text" id="enter"/>
      
       <a  href={`${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join("%20")}&response_type=${RESPONSE_TYPE}&show_dialog=true`}> 
           <img class="img1" src={SpotifyLogo}/>
       </a>
    </div>
   </form>
    </div>
  )
}
import React,{useEffect,useState} from 'react';
import './App.css';
import Login from './Components/Login';
import SearchArtists from './Components/searchArtists';


function App() {
  const  [albums , setAlbums] = useState([])
  const [Token,setToken]=useState()
  const getToken = () => {
    return window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
  
        return initial;
      }, {});
  };
  
  
    
useEffect(()=>{
  localStorage.clear()
  const token = getToken().access_token
  
  if(token){
    setToken(token)
    localStorage.setItem("myToken",Token)

    console.log(Token)
  }
})
  return (
    <div>
      {!Token && <Login/>}
      {Token && <SearchArtists/>}
    </div>
  )
}

export default App;
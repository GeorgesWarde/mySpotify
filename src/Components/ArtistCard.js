import React,{useState} from "react"

import WhiteStar from "../Images/whiteStar.png"
import YellowStar from '../Images/yellowStar.png'
import "../index.css"
export default function ArtistCard(props) {
  
  
     const renderPopularity =() =>{
       if(props.ArtistPopularity<20){
         return(<><img className="stars" src={WhiteStar}/>
         <img className="stars"src={WhiteStar}/>
         <img  src={WhiteStar} className="stars"/>
          <img src={WhiteStar} className="stars"/>
         <img src={WhiteStar}className="stars"/></>)
        }
        if(props.ArtistPopularity<40 && props.ArtistPopularity>20){
          return(<><img src={YellowStar} className="stars"/>
          <img src={WhiteStar} className="stars"/>
          <img src={WhiteStar}className="stars" />
           <img src={WhiteStar}className="stars"/>
          <img src={WhiteStar}className="stars" /></>)
         }
         if(props.ArtistPopularity<60 && props.ArtistPopularity>40){
          return(<><img src={YellowStar} className="stars"/>
          <img src={YellowStar}className="stars"/>
          <img src={WhiteStar} className="stars"/>
           <img src={WhiteStar} className="stars"/>
          <img src={WhiteStar}className="stars"/></>)
         }
         if(props.ArtistPopularity<80 && props.ArtistPopularity>60){
          return(<><img src={YellowStar} className="stars"/>
          <img src={YellowStar} className="stars"/>
          <img src={YellowStar}className="stars" />
           <img src={WhiteStar}className="stars" />
          <img src={WhiteStar}className="stars"/></>)
         }
         if(props.ArtistPopularity<100 && props.ArtistPopularity>80){
          return(<><img src={YellowStar} className="stars"/>
          <img src={YellowStar}className="stars" />
          <img src={YellowStar}className="stars" />
           <img src={YellowStar}className="stars"/>
          <img src={WhiteStar}className="stars" /></>)
         }
         if(props.ArtistPopularity==100 || props.ArtistPopularity>100){
          return(<><img src={YellowStar} className="stars"/>
          <img src={YellowStar} className="stars"/>
          <img src={YellowStar} className="stars"/>
           <img src={YellowStar} className="stars"/>
          <img src={YellowStar} className="stars"/></>)
         }
         
     }
     
    
  return (
  
  
 
         
    <div class="card" >
        
    <div class="card_image"><img className="artistImage" src={props.Image} /></div>
 <div class="artist_card_content">
      <h2 class="card_title">{props.ArtistName}</h2>
      <p class="card_text">{props.Followers} Follower</p>
   
      {renderPopularity()}
     
    </div>
    
  
  </div>

  
  

  )
  

}

import React, { useContext, useState } from 'react';
import { sample } from '../App';
import { LuClock } from "react-icons/lu";
import { ImSpoonKnife } from "react-icons/im";
import { SlFire } from "react-icons/sl";

const Details = () => {
  const { getpro, sethide } = useContext(sample);
  console.log(getpro);
  sethide(false);

  const [show, setshow] = useState(false);
  const [shows, setshows] = useState(false)
  
  const ing=()=>{
    setshow(true);
  }

  const met=()=>{
    setshows(true);
  }
  return (
    <div style={{ display: "flex"}}>
      <div style={{ width: "800px", margin: "90px", borderRadius: "30px" }}> 
        <img style={{ width: "100%", borderRadius: "30px" }} src={getpro.image} alt="" /> 
      </div>
      <div style={{ margin: "160px 60px"}}>
        <h4 style={{ textAlign: "center", fontFamily:"cursive", fontSize:"30px" }}>{getpro.name}</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus quidem, praesentium dicta soluta dignissimos cum fugiat nobis voluptatibus reiciendis suscipit deleniti illum error est similique adipisci, consectetur quos facere architecto?</p>
        
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px"}}>
          <div style={{ display: "flex", alignItems: "center", marginRight: "30px"}}>
            <LuClock style={{ fontSize: "32px", marginRight: "10px"}} />
            <h6>{getpro.cookTimeMinutes} min</h6>
          </div>

          <div style={{ display: "flex", alignItems: "center", marginRight: "30px"}}>
            <ImSpoonKnife style={{ fontSize: "32px", marginRight: "10px"}} />
            <h6>{getpro.servings} person</h6>
          </div>

          <div style={{ display: "flex", alignItems: "center"}}>
            <SlFire style={{ fontSize: "32px", marginRight: "10px"}} />
            <h6>{getpro.caloriesPerServing} cal</h6>
          </div>
        </div>
        
        <div style={{ display: "flex", justifyContent: "center"}}>
          <button style={{ backgroundColor: "green", color: "white",border: "none",padding: "10px 20px", cursor: "pointer",borderRadius: "5px",fontSize: "16px", margin:"0 10px"}} onClick={ing} >Ingredients</button>
          <button style={{backgroundColor: "red", color: "white",border: "none",padding: "10px 20px", cursor: "pointer",borderRadius: "5px",fontSize: "16px", margin:"0 10px"}} onClick={met}>Method</button>
        </div>

        {show===true?
        <ul>
          {getpro.ingredients.map((arg) => (
            <li>{arg}</li>
          ))}
        </ul>:""
        }

        {shows===true?
        <ol>
          {getpro.instructions.map((arg) => (
            <li>{arg}</li>
          ))}
        </ol>:""
        }

      </div>
      
    </div>
  );
};

export default Details;

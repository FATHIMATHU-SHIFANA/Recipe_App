import React, { useContext, useEffect, useState} from 'react'
import axios from 'axios'
import { sample } from '../App'
import { useNavigate } from 'react-router-dom'
import './Recipe.css'
const Recipe = () => {
    const recipeapi="https://dummyjson.com/recipes"
    const {recipe, setrecipe ,search,getpro, setgetpro} = useContext(sample)

    const [ind, setind] = useState(0)
    useEffect(() => {
     axios.get(recipeapi).then((res)=>setrecipe(res.data.recipes))
     
    }, [setrecipe])
    console.log(recipe);

    const left =()=>{
      setind(Math.max(0,ind -4));
    }

    const right =()=>{
      if (ind+4>=29) {
        setind(0)
      } else {
        setind(ind+4)
      }  
    }

    const filtersearch = recipe.filter((e)=>e.name.toLowerCase().includes(search));
  
    const nav = useNavigate()

    const click=(arg)=>{
      nav('/detail')
      setgetpro(arg)
    }
    console.log(getpro);
    //  #FAE6B1
   
  return (
    <div style={{textAlign:"center", backgroundColor:"#B3DEE5", padding:"30px", margin:"80px", borderRadius:"50px"}}>
        <h1 style={{fontFamily:"cursive" ,color:"#FFA101"}} >Popular Dishes</h1>
        <div style={{display:"flex", alignItems: "center",justifyContent: "space-between"}}>
        <button onClick={left} style={{border:"none", fontSize:"40px", backgroundColor:"#B3DEE5", color:"white", cursor: "pointer"}}> &lt; </button>

        {(search.length > 0 ? filtersearch : recipe).slice(ind,ind + 4).map((arg)=>{
        return(
          <div onClick={()=>click (arg)} className="recipe-image" style={{backgroundImage:`url(${arg.image})`}}>
          <h4  style={{marginTop:"160px", color:"white", fontSize:"19px"}}>{arg.name}</h4>
          </div>
         )
         })}
         <button onClick={right} style={{border:"none", fontSize:"40px", backgroundColor:"#B3DEE5" , color:"white"}}> &gt; </button>
         </div>
      </div>    
  )
}

export default Recipe
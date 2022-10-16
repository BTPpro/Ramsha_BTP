import React from "react";
import Searchcard from "./Searchcard.module.css";


function card(props)
{
  return (
        <div className={Searchcard.searchpost}>
        <h4 className={Searchcard.h4}> {props.name}</h4>
        </div>
    
    
  )
}
export default card;
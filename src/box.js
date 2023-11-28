import React from "react";

export default function Card(props){
  return(
    <div>
      <h1>{props.name}</h1>
      <h1>{props.temp}</h1>
      <h1>{props.desc}</h1>
    </div>
  )

}
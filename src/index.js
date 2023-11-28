import React from "react";
import  ReactDOM  from "react-dom"
import "./main.css"
import Card from "./box"

function App(){

  let[search,setsearch]=React.useState("")

  let [data,setdata]=React.useState('')

  function handleChange(e){
    setsearch(e.target.value)

  }
  //country.main.temp
  //country.name
  //country.weather[0].main


  function ShowWeather(e){
    e.preventDefault()
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8c58d6f3443a9f5319f585e1a2dec4a0`)
      .then(res=>res.json())
      .then((data)=>{
        let weathers={
          locations: `${data.name}`,
          image:`http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
          temperature: `${data.main.temp}C`,
          desc:`condition: ${data.weather[0].description}`


        }
        setdata(weathers)
      })
  }
  
  console.log(data.image)
  
  return(
    <div className="bg">
    <div>
      <form onSubmit={ShowWeather}>
        <input placeholder="Enter Country" onChange={handleChange}></input>
        <button>Search</button>

      </form>
      
      
      <div className="container">
        
        <img src={data.image}></img>
        <h1>{data.temperature}</h1>
        <h2>{data.locations}</h2>
        <p>{data.desc}</p>

      </div>

    </div>
    </div>
    
  )
}

ReactDOM.render(<App/>,document.querySelector("#root"))
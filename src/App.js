import WeatherLayout from './components/WeatherLayout'
import getWeatherData from "./components/getWeatherData"
import './App.css';
import Form from './components/Form'
import axios from "axios";
import React, {useReducer,useEffect,useState} from 'react'

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?';
const apiKey = 'dcda78e31046810ae1a10075efce2bdd';




var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

function App() {
  
  const[location,setLocation] = useState("Toronto")
  const[country,setCountry] = useState("CA")
  const[temp,setTemp] = useState("")
  const [dis,setDis] = useState("")
  const[object,setObject] = useState({})
  const[img,setImg] = useState("")



  useEffect(()=>{
    getWeatherData(location,country,setObject,setTemp,setDis,setLocation,setImg)
    //console.log(object);
    // setTemp(Math.round(object.main.temp-273.15));
    // setDis(object.weather[0].main);
    // setLocation(object.main.name);
  },[location])
  
  
  return (
    <div className="main">
      {/* <Form setLocation={setLocation}/> */}
      <WeatherLayout location={location} date={today} temp={temp} weatherDiscription={dis} setLocation={setLocation} img={img}/>
    </div>
  );
}

export default App;

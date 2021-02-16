import React from 'react';
import Form from "./Form"

function WeatherLayout({location, date,temp,weatherDiscription,setLocation,img}) {
    return (
        <div className="mainBody">

            <Form setLocation={setLocation}/>

            <div className="cityName">
                <h1>{location}</h1>
            </div>

            <div className="date">
                <h3>{date}</h3>
            </div>

            <div className="temperture"> 
                {temp} 
            </div>

            <div className="weatherDiscription"> 
                {weatherDiscription} 
            </div>

            <div className="weather-icon">
                <img src= {img} />
                {console.log(img)}
            </div>

        </div>
    );
}

export default WeatherLayout;
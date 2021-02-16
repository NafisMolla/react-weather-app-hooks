import axios from 'axios';

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?';

const getWeatherData = async (city,country,setObject,setTemp,setDis,setLocation,setImg) => {
    // const result=await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=180941f68139fba12f166dc35d9b688b`)
    // return result;
    
    await axios({
        method: "GET",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=180941f68139fba12f166dc35d9b688b`,
      })
        .then((response) => {
            //console.log(response)
            // const json = JSON.stringify(response);
            setObject(response)
            setTemp(Math.round(response.data.main.temp-273.15));
            setDis(response.data.weather[0].main);
            setLocation(response.main.name);
            const icon = response.data.weather[0].icon
            const iconApi = fetch('http://openweathermap.org/img/w/' + icon + '.png')
            setImg(iconApi.url)

      
        })
        .catch((error) => {
          console.log(error);
        });
  
}


export default getWeatherData;
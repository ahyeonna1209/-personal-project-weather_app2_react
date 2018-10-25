import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY="18fff390d86582a57fabf47a890d2816";

//initialize component
class App extends React.Component{

  // State is an object that lives within a component and it's reponsible for keeping track of changing of data within a data
  // this state is for displaying weather in the monitor (not on a console log)

  state ={
    temperature : undefined,
    city : undefined,
    country: undefined,
    humidity : undefined,
    description : undefined,
    error : undefined  
  }

  getWeather = async (e)=>{
    e.preventDefault(); //prevent refreshing
    
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    
    //send to JSON-whatever we get, send to JSON that readable in any computer langage
    const data = await api_call.json();
    
    if (city && country){ 
      //if(city===true && country===true)
      //only if 'city' and 'country' is true, returne those values
      //otherwise since values are set as 'undefined', when submit button, apps would be broken
      //console.log(data);
      this.setState({
        temperature:data.main.temp,
        city:data.name,
        country:data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error :""
      });
    }else{
      this.setState({
        temperature:undefined,
        city: undefined,
        country: undefined,
        humidity:undefined,
        description:undefined,
        error: "Please enter the City and the Country"
      });
    }
    
  }

  //display data inside the component
  render(){
    return(
      <div>
        <Titles />
        <Form getWeather={this.getWeather} /> 
        {/*Form에다가 getWeather 을 부여해서 실제로 Form에 있는게 실행될 때 Weather info 가져올 수 있게한다*/}
        <Weather 
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
};

export default App;

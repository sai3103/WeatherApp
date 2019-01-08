import React from "react";
import "./App.css";
import Form from "./components/Form"
import Data from "./components/Data"

class App extends React.Component{

    state={
        city: undefined,
        country: undefined,
        Temperature: undefined,
        Humidity : undefined,
        error: undefined
    };

    getWeather= async (e) => {
        e.preventDefault();
        const city=e.target.elements.city.value;
        const country=e.target.elements.country.value;
        const apiKey="aa09d6942d41db20a6eeaf6dbcd1071c";
        const apiCall= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`);
        const data=await apiCall.json();
        console.log(data);
        if(data.message!="city not found" && city && country){
            this.setState({
                city: data.name,
                country: data.sys.country,
                Temperature: data.main.temp+" deg",
                Humidity : data.main.humidity,
                error: undefined
                });
        }
        else{
            this.setState({
                city: undefined,
                country: undefined,
                Temperature: undefined,
                Humidity : undefined,
                error: "Please enter valid city and country"
                });
        }

    }

    render(){
        return (
            <div>
                <h1 className="text-center display-4 title">Know The Weather</h1>
                <Form onclick={this.getWeather}/>
                <Data city={this.state.city} country={this.state.country} 
                Temperature={this.state.Temperature} Humidity={this.state.Humidity} 
                error={this.state.error}/>
            </div>
            
        );
    }
}

export default App;
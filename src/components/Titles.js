import React from "react";
import App from "../App";

const Titles = () => (
//here i don't need any props. so just put blanked ()
    <div>
        <h1>Weather Finder</h1>
        <p>Find out temperature, conditions, and more...</p>
    </div>
); 

/*
class Titles extends React.Component{
    render(){
        return(
            <div>
                <h1>Weather Finder</h1>
                <p>Find out temperature, conditions, and more...</p>
            </div>
        );
    }
};
*/
export default Titles;

import React from "react";

// we don't have any state here
/*
class Form extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="City..." />
                <input type="text" name="country" placeholder="Country..." />
                <button>Get weather</button>
            </form>
        );
    }
};
*/

const Form = props =>(
    <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="City..." />
        <input type="text" name="country" placeholder="Country..." />
        <button>Get weather</button>
    </form>
);

export default Form;

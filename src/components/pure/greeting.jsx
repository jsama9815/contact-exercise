import React, { Component } from 'react';
import propTypes from 'prop-types';


class Greeting extends Component {

    constructor(props){
        super(props)
        this.state = {
            age: 29
        }
    }

    render() {
        return (
            <div>
                <h1>
                    Hola { this.props.name } !
                </h1> 
                <h2>tu edad es de : { this.state.age  } </h2>
                <div>
                    <button onClick={ this.birthday }>Cumplir anios</button>
                </div>
            </div>
        );
    }

    birthday = () => {
        this.setState((prevState) => (
            {
                age: prevState.age +1
            }
        ))
    }
}


Greeting.propTypes = {
    name: propTypes.string,
};


export default Greeting;

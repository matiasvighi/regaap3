import React, { Component } from 'react'

export default class Garompa extends Component {

    suma(a, b){
        let res = a+b;

        return(
            <p>{res}</p>
        );
    }

    render() {
        return (
            <div>
                <p>Hola: {this.suma(1, 10)} </p>
            </div>
        )
    }
}

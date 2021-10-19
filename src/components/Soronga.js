import React, { Component } from 'react'

export default class Soronga extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0,
             nombre: "vacio",
             apellido: "apellido vacui"
        }

        this.onSubmit = this.onSubmit.bind(this);

    }

    suma(){
        let res = this.props.val1+this.props.val2;
        return(res);
    }

    click(){
        this.setState({
            count: this.state.count+1
        })
    }

    onSubmit(e){
        e.preventDefault();
        let form = e.target;
        let inputNombre = form.nombre;
        let inputApellido = form.apellido;
        let valorNombre = inputNombre.value;
        let valorApellido = inputApellido.value;
        inputNombre.value = "";
        inputApellido.value = "";
        console.log(valorNombre);
        this.setState({
            nombre: valorNombre,
            apellido: valorApellido
        })
    }

    render() {
        return (
            <div className="soronga">
                <p>Count:{this.state.count}</p>
                <p>Suma:{this.suma()}</p>
                <p>Nombre:{this.state.nombre}</p>
                <p>Apellido:{this.state.apellido}</p>

                <form onSubmit={this.onSubmit}>
                    <input name="nombre"></input><br/>
                    <input name="apellido"></input>
                    <button type="submit">Ok!</button>
                </form>

                <button onClick={()=>this.click()}>Click!</button>
            </div>
        )
    }
}

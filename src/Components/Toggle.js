import {Component} from 'react'

class Toggle extends Component {
    constructor(props) {
        //Ejecuta el constructor de Component con el argumento props
        super(props);       
        //El estado es un objeto. Solo hay un estado.               
        this.state = {isToggleOn: true}     
    }
    //Usar esta sintaxis nos evita ciertos problemas con this
    handleClick = () => { 
        //Usamos una función flecha para no mutar el estado.                  
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn   
        }));                                
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

export default Toggle;
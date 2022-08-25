import React from 'react';
export default class CicloVida extends React.Component{
    constructor(){
        super();
        console.log(0,"Componente creado.Aun no existe en el Dom")
        this.state={
            hora:new Date().toLocaleTimeString()
        }
        this.timer=null;
        /*setInterval(()=>{
            this.setState({
                hora:new Date().toLocaleTimeString()
            })
        },5000);*/
    }
    componentDidMount(){
        console.log(2,"Componente renderizado por primera vez")
    }

    iniciar=(e)=>{
      this.timer=setInterval(()=>{
            this.setState({
                hora:new Date().toLocaleTimeString()
            })
        },1000);
    }
    detener=(e)=>{
        clearInterval(this.timer);
    }
    render(){
        console.log(1,"Componente actualizado por el cambio de una propiedad o estado")
        return(
            <div>
                <button onClick={this.iniciar}>Iniciar</button>
                <button onClick={this.detener}>Detener</button>
                <h1>{this.state.hora}</h1>
            </div>
        )
    }
}
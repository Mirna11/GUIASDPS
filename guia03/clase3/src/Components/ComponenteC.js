import React from "react";
class ComponenteC extends React.Component{
    render(){
        return <h2>Hola soy un componente de tipo clase.{this.props.msg}</h2>;
    }
}
export default ComponenteC;
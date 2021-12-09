import React from 'react';
import {Navigate} from "react-router-dom";

class RetornoClientes extends React.Component{

state = {        
        status:"volver"
    }


    render(){

        if (this.state.status === "volver"){
            return <Navigate to = "/clientes" />
        } 


        return(
            <div>
                <h3>BIENVENIDO!</h3>
                               
            </div>
            
    
        );

    }
    
}

export default RetornoClientes;
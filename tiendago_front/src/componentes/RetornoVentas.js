import React from 'react';
import {Navigate} from "react-router-dom";

class RetornoVentas extends React.Component{

state = {        
        status:"volver"
    }


    render(){

        if (this.state.status === "volver"){
            return <Navigate to = "/ventas" />
        } 


        return(
            <div>
                <h3>BIENVENIDO!</h3>
                               
            </div>
            
    
        );

    }
    
}

export default RetornoVentas;
import React from 'react';
import {Navigate} from "react-router-dom";

class MiComponente extends React.Component{

    state = {        
        status:"volver"
    }


    render(){

        if (this.state.status === "volver"){
            return <Navigate to = "/productos" />
        } 


        return(
            <div>
                <h3>BIENVENIDO!</h3>
                               
            </div>
            
    
        );

    }
    
}

export default MiComponente;
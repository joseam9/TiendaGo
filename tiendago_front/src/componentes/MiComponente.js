import React from 'react';

class MiComponente extends React.Component{
    render(){
        return(
            <div>
                <h3>BIENVENIDO!</h3>
                <label for="">User</label>
                <input type="text"></input>
                <label for="">Pass</label>
                <input type="password"></input>
                <button>Enviar</button>
                
            </div>
            
    
        );

    }
    
}

export default MiComponente;
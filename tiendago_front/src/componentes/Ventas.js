import React, {Component} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert";


class Ventas extends Component{

    state={
        clientes:[],
        status:null
    }

    componentWillMount(){
        this.getClientes();
    }

   
    
    getClientes = () => {
        axios.get("http://localhost:8081/api/clientes/")
        .then(res =>{
            console.log(res.data);
            this.setState({
                clientes:res.data
            })
          });
    
    }

    render (){
        
        return(
            <div>
                <h1>Modulo Ventas</h1>

                <table>
                    <thead>
                        <th>id</th>
                        <th>cedula</th>
                    </thead>
                    <tbody>

                    {this.state.clientes.map((cliente)=>{return(
                        
                            <tr>
                                <td>{cliente._id}</td>
                                <td>{cliente.cedula_cliente}</td>
                            </tr>
                        
                        );})}

                    </tbody>
                </table>

                


                
            </div>
        );
    }

}

export default Ventas;
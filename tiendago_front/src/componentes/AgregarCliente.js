import axios from "axios";
import React, { Component } from "react";
import {Navigate} from "react-router-dom";
import swal from "sweetalert";

class AgregarCliente extends Component{
    cedula=React.createRef();
    cliente=React.createRef();
    telefono=React.createRef();
    direccion=React.createRef();
    correo=React.createRef();
        
    state={
        cliente:[],
        status:null
    }
    guardarCliente=(e)=> {
        e.preventDefault();
        var cliente ={
            cedula_cliente:this.cedula.current.value,
            nombre_cliente:this.cliente.current.value,
            telefono_cliente:this.telefono.current.value,
            direccion_cliente:this.direccion.current.value,
            correo_cliente:this.correo.current.value,
        }
        console.log(cliente)
        axios.post("http://localhost:8081/api/clientes/cliente",cliente)
            .then(res => {
                if(res.data){
                    this.setState({
                        status:"success"
                    });
                    swal(
                        "Cliente Nuevo",
                        "El Cliente ha sido adicionado correctamente",
                        "success"
                    )
                }


            })
    }
    render(){
        if (this.state.status==="success"){
            return <Navigate to ="/clientes"/>
        }
        return(
            <div>
               
                <h1>Agrega un nuevo Cliente</h1>
                <form onSubmit={this.guardarCliente}>
                    <div>
                        <label>Cedula del Cliente</label> 
                        <input type ="text" name="cedula"ref={this.cedula}/>
                     </div>
                     <div>
                        <label> Cliente</label>
                        <input type ="text" name="cliente"ref={this.cliente}/>
                     </div>
                     <div>
                        <label> Telefono</label>
                        <input type ="text" name="telefono"ref={this.telefono}/>
                     </div>
                     <div>
                        <label> Direccion</label>
                        <input type ="text" name="direccion"ref={this.direccion}/>
                     </div>
                     <div>
                        <label> Correo </label>
                        <input type ="text" name="correo"ref={this.correo}/>
                     </div>
                     <div>
                         <input type ="submit"/>
                     </div>
                </form>
                
            </div>
        );
    }
}

export default AgregarCliente;
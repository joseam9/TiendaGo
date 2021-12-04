import axios from "axios";
import React, { Component } from "react";
import {Navigate} from "react-router-dom";
import swal from "sweetalert";

class EditarCliente extends Component{
    clienteId= null;
    path= null;
    url=[];
    cedula=React.createRef();
    cliente=React.createRef();
    telefono=React.createRef();
    direccion=React.createRef();
    correo=React.createRef();
       
    state={
        cliente:[],
        status:null
    }
    componentWillMount(){
        this.path=window.location.pathname;
        console.log(this.path);
        this.url=this.path.split("/");
        console.log(this.url);
        this.clienteId=this.url[2];
        this.getCliente(this.clienteId);

    }
    getCliente=(id) => {
        axios.get("http://localhost:8081/api/clientes/cliente/"+id)
             .then(res =>{
                  console.log(res.data);
                  this.setState({
                      cliente:res.data
                  })
                });
    }
    guardarCliente=(e)=> {
        e.preventDefault();
        var cliente ={
            _id:this.clienteId,
            cedula_cliente:this.cedula.current.value,
            nombre_cliente:this.cliente.current.value,
            telefono_cliente:this.telefono.current.value,
            direccion_cliente:this.direccion.current.value,
            correo_cliente:this.correo.current.value,
        }
        console.log(cliente)
        axios.put("http://localhost:8081/api/clientes/cliente/"+this.clienteId, cliente)
            .then(res => {
                if(res.data){
                    this.setState({
                        status:"success"
                    });
                    swal(
                        "Cliente Editado",
                        "El cliente ha sido editado correctamente",
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
                <h1> Editar Cliente</h1>
                <form onSubmit={this.guardarCliente}>
                    <div>
                        <label>Cedula del Cliente</label>
                        <input type ="text" name="cedula"ref={this.cedula} defaultValue={this.state.cliente.cedula_cliente}/>
                     </div>
                     <div>
                        <label>Cliente</label>
                        <input type ="text" name="cliente"ref={this.cliente} defaultValue={this.state.cliente.nombre_cliente}/>
                     </div>
                     <div>
                        <label>Telefono </label>
                        <input type ="text" name="telefono"ref={this.telefono} defaultValue={this.state.cliente.telefono_cliente}/>
                     </div>
                     <div>
                        <label> Direccion </label>
                        <input type ="text" name="direccion"ref={this.direccion} defaultValue={this.state.cliente.direccion_cliente}/>
                     </div>
                     <div>
                        <label> Correo </label>
                        <input type ="text" name="correo"ref={this.correo} defaultValue={this.state.cliente.correo_cliente}/>
                     </div>
                     <div>
                         <input type ="submit"/>
                     </div>
                </form>
            </div>
        );
    }
}

export default EditarCliente;
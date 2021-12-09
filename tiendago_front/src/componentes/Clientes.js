import React, { Component } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import swal from "sweetalert";
import {Navigate} from "react-router-dom";

class Clientes extends Component{
    state= {
        clientes:[]
    }
    componentWillMount(){
        this.getClientes();

    }
    getClientes=() => {
        axios.get("http://localhost:8081/api/clientes/")
             .then(res =>{
                  console.log(res.data);
                  this.setState({
                      clientes:res.data
                  })
                });
    }
    borrarCliente = (id) => {
        axios.delete("http://localhost:8081/api/clientes/cliente/"+id)
        .then(resa=>{
            this.setState({
                status:"deleted"
            });
            
            swal(
                "Cliente Borrado",
                "El cliente ha sido borrado correctamente",
                "success"
            )
            
            
                    
        })
    }
    render (){

        if (this.state.status === "deleted"){
            return <Navigate to = "/retornoClientes" />
        }

        return(
            <div>
                <h1>Nuestros Clientes</h1>
                <Link to = "/agregarCliente"> Crear Cliente </Link>
                <table>
                    <thead>
                        <th>Cedula</th>
                        <th>Nombre del Cliente</th>
                        <th>Telefono </th>
                        <th>Direccion </th>
                        <th>Correo </th>
                        <th>Acciones</th>
                    </thead>
                    <tbody>
                        {
                            this.state.clientes.map((cliente)=>{
                                return(
                                    <React.Fragment>
                                        <tr>
                                            <td>{cliente.cedula_cliente}</td>
                                            <td>{cliente.nombre_cliente}</td>
                                            <td>{cliente.telefono_cliente}</td>
                                            <td>{cliente.direccion_cliente}</td>
                                            <td>{cliente.correo_cliente}</td>
                                            <td>
                                                <Link to ={"/editarCliente/"+cliente._id}>Editar</Link>
                                                <button onClick={
                                                    () => {
                                                        this.borrarCliente(cliente._id)
                                                    }
                                                }>
                                                    Eliminar
                                                </button> 
                                            </td>
                                        </tr>
                                    </React.Fragment>

                                );

                            })
                        }
                    </tbody>
                </table>

            </div>
            );
        }
      }

export default Clientes;
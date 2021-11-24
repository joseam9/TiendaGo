import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import swal from "sweetalert";

class Productos extends Component{

    state = {
        productos:[]
    }

    componentWillMount(){
        this.getProductos();
    }

    getProductos = () => {
        axios.get("http://localhost:8081/api/productos/")
                .then(res =>{
                    console.log(res.data);
                    this.setState({
                        productos:res.data
                    })
                });
                
    }

    borrarProducto = (id) => {
        axios.delete("http://localhost:8081/api/productos/producto/"+id)
            .then(res=>{
                this.setState({
                    status:"deleted"
                });
                swal(
                    "Artículo Borrado",
                    "El artículo ha sido borrado correctamente",
                    "success"
                )
                window.location.reload(true);
            })
    }

    render(){
        
        return(
            
            <div>
                <h1>Productos</h1>

                <Link to = "/agregarProducto">Crear Producto</Link>

                <table>
                    <thead>
                        <th>Código Producto</th>
                        <th>Nombre del Producto</th>
                        <th>Nit Proveedor</th>
                        <th>IVA</th>
                        <th>Precio Compra</th>
                        <th>Acciones</th>
                    </thead>
                    <tbody>
                        {
                            this.state.productos.map((producto)=>{
                                return(
                                    <React.Fragment>
                                        <tr>
                                            <td>{producto.codigo_producto}</td>
                                            <td>{producto.nombre_producto}</td>
                                            <td>{producto.nitproveedor}</td>
                                            <td>{producto.precio_compra}</td>
                                            <td>{producto.iva_compra}</td>
                                            <td>{producto.precio_venta}</td>
                                            <td>
                                                <Link to = {"/editarProducto/"+producto._id}>Editar</Link>
                                                <button onClick ={
                                                    () => {
                                                        this.borrarProducto(producto._id)
                                                    }
                                                }>
                                                    Eliminar
                                                </button>
                                            </td>
                                        </tr>
                                    </React.Fragment>
                                );
                            }
                            
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Productos;
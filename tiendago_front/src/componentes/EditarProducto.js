
import React, { Component } from "react";
import axios from "axios";
import {Navigate} from "react-router-dom";
import swal from "sweetalert";

class EditarProducto extends Component{
    productoId=null;
    path=null;
    url=[];
    codigo=React.createRef();
    producto=React.createRef();
    nit=React.createRef();
    precioCompra=React.createRef();
    iva=React.createRef();
    precioVenta=React.createRef();

    state = {
        producto:[],
        status:null
    }

    componentWillMount(){
        this.path=window.location.pathname;
        console.log(this.path);
        this.url=this.path.split("/");
        console.log(this.url);
        this.productoId=this.url[2];
        this.getProducto(this.productoId);
    }

    getProducto = (id) => {
        axios.get("http://localhost:8081/api/productos/producto/"+id)
            .then(res =>{
                console.log(res.data);
                this.setState({
                    producto:res.data
                })
            });
    }

    guardarProducto = (e) => {
        e.preventDefault();
        var producto = {
            _id:this.productoId,
            codigo_producto:this.codigo.current.value,
            nombre_producto:this.producto.current.value,
            nitproveedor:this.nit.current.value,
            precio_compra:this.precioCompra.current.value,
            iva_compra:this.iva.current.value,
            precio_venta:this.precioVenta.current.value
        }

        console.log(producto);

        axios.put("http://localhost:8081/api/productos/producto/"+this.productoId, producto)
            .then(res => {
                if(res.data){
                    this.setState({
                        status:"success"
                    });
                    swal(
                        "Artículo Editado",
                        "El artículo ha sido editado correctamente",
                        "success"
                    )
                }
            })
    }
    render(){
        if(this.state.status === "success"){
            return <Navigate to = "/productos" />
        }
        return(
            <div>
                <h1>Editar Producto</h1>
                <form onSubmit={this.guardarProducto}>
                    <div>
                        <label>Código del Producto</label>
                        <input type = "text" name = "codigo" ref = {this.codigo} defaultValue={this.state.producto.codigo_producto}/>
                    </div>
                    <div>
                        <label>Producto</label>
                        <input type = "text" name = "producto" ref = {this.producto} defaultValue={this.state.producto.nombre_producto}/>
                    </div>
                    <div>
                        <label>Nit Proveedor</label>
                        <input type = "text" name = "nit" ref = {this.nit} defaultValue={this.state.producto.nitproveedor}/>
                    </div>
                    <div>
                        <label>Precio de Compra</label>
                        <input type = "text" name = "precioCompra" ref = {this.precioCompra} defaultValue={this.state.producto.precio_compra}/>
                    </div>
                    <div>
                        <label>IVA</label>
                        <input type = "text" name = "iva" ref = {this.iva} defaultValue={this.state.producto.iva_compra}/>
                    </div>
                    <div>
                        <label>Precio Venta</label>
                        <input type = "text" name = "precioVenta" ref = {this.precioVenta} defaultValue={this.state.producto.precio_venta}/>
                    </div>
                    <div>
                        <input type = "submit" />
                    </div>
                </form>
            </div>
        );
    }
}

export default EditarProducto;
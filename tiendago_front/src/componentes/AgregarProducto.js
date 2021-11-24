
import React, { Component } from "react";
import axios from "axios";
import {Navigate} from "react-router-dom";
import swal from "sweetalert";

class AgregarProducto extends Component{
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
    guardarProducto = (e) => {
        e.preventDefault();
        var producto = {
            codigo_producto:this.codigo.current.value,
            nombre_producto:this.producto.current.value,
            nitproveedor:this.nit.current.value,
            precio_compra:this.precioCompra.current.value,
            iva_compra:this.iva.current.value,
            precio_venta:this.precioVenta.current.value
        }

        console.log(producto);

        axios.post("http://localhost:8081/api/productos/producto", producto)
            .then(res => {
                if(res.data){
                    this.setState({
                        status:"success"
                    });
                    swal(
                        "Artículo Agregado",
                        "El artículo ha sido agregado correctamente",
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
                <h1>Agregar Producto</h1>
                <form onSubmit={this.guardarProducto}>
                    <div>
                        <label>Código del Producto</label>
                        <input type = "text" name = "codigo" ref = {this.codigo}/>
                    </div>
                    <div>
                        <label>Producto</label>
                        <input type = "text" name = "producto" ref = {this.producto}/>
                    </div>
                    <div>
                        <label>Nit Proveedor</label>
                        <input type = "text" name = "nit" ref = {this.nit}/>
                    </div>
                    <div>
                        <label>Precio de Compra</label>
                        <input type = "text" name = "precioCompra" ref = {this.precioCompra}/>
                    </div>
                    <div>
                        <label>IVA</label>
                        <input type = "text" name = "iva" ref = {this.iva}/>
                    </div>
                    <div>
                        <label>Precio Venta</label>
                        <input type = "text" name = "precioVenta" ref = {this.precioVenta}/>
                    </div>
                    <div>
                        <input type = "submit" />
                    </div>
                </form>
            </div>
        );
    }
}

export default AgregarProducto;
import React, {Component} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert";




class Ventas extends Component{

    ventaId= null;
    cedula=React.createRef();    
    customerid=React.createRef();   

    temp=React.createRef();   

    valorUnitarioP1 =React.createRef();
    cantidadP1 =React.createRef();
    valorUnitarioP2 =React.createRef();
    cantidadP2 =React.createRef();
    valorUnitarioP3 =React.createRef();
    cantidadP3 =React.createRef();

    valorTotalP1=React.createRef();
    valorTotalP2=React.createRef();
    valorTotalP3=React.createRef();

    totalventa=React.createRef();
    ivaventa=React.createRef();
    totalventaconiva=React.createRef();
    detalle_venta=React.createRef();

    state={
        clientes:[],
        productos:[],
        status:null,      
        selectedOption: null,

        customerid:null,
         
        valorTotalP1:null,
        valorTotalP2:null,
        valorTotalP3:null,

        detalle_venta:[],
        

        totalventa:null,
        ivaventa:null,
        totalventaconiva:null                
    }



    componentWillMount(){
        this.getClientes();
        this.getProductos();
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

    getProductos = () => {
        axios.get("http://localhost:8081/api/productos/")
                .then(res =>{
                    console.log(res.data);
                    this.setState({
                        productos:res.data
                    })
                });
                
    }

    

    guardarVenta=(e)=> {

        var detalleventa={cantidad_producto:2,codigo_producto:2,valor_iva:77,valor_total:3,valor_venta:4};
        this.setState({
            detalle_venta:detalleventa
        })
        console.log(detalleventa)

        e.preventDefault();
        var venta={
            //_id:this.ventaId,            
            //cedula_cliente:this.cedula.current.value,
            cedula_cliente:7,  
            codigo_venta:7, 
            detalle_venta:[detalleventa],
            iva_venta:this.ivaventa.current.value,
            total_venta:this.totalventa.current.value,
            valor_venta:this.totalventaconiva.current.value,
        }
	    console.log(venta)
        
        axios.post("http://localhost:8081/api/ventas/venta/", venta)
            .then(res => {
                if(res.data){
                    this.setState({
                        status:"success"
                    });
                    swal(
                        "Venta guardada",
                        "La venta ha sido guardada exitosamente",
                        "success"
                    )
                }
            })
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);  
        alert(this.temp.current.value);
        var customer=selectedOption;
        this.setState({customerid:customer});
    }

    operacion = (e) => {
        e.preventDefault();
        
        var vUnitP1 = Number(this.valorUnitarioP1.current.value);
        var vUnitP2 = Number(this.valorUnitarioP2.current.value);
        var vUnitP3 = Number(this.valorUnitarioP3.current.value);

        var cant1 = Number(this.cantidadP1.current.value);
        var cant2 = Number(this.cantidadP2.current.value);
        var cant3 = Number(this.cantidadP3.current.value);   
        
        var ivaVenta = Number(this.ivaventa.current.value);

        var vTotalP1 = vUnitP1*cant1;
        var vTotalP2 = vUnitP2*cant2;
        var vTotalP3 = vUnitP3*cant3;

        var vTotal = vTotalP1+vTotalP2+vTotalP3;

        var vTotalconIVA=vTotal+ivaVenta;
        

        this.setState({
            valorTotalP1:vTotalP1,
            valorTotalP2:vTotalP2,
            valorTotalP3:vTotalP3,
            totalventa:vTotal,
            totalventaconiva:vTotalconIVA
            
            

        });
        
    }
      


    render (){

        const { selectedOption } = this.state;
        
        return(
            <div>
                <h1>Modulo Ventas</h1>
                <p></p>

                <table>
                    <thead>
                        <th>Cliente</th>
                        <th>Cliente Id</th>
                        <th>Consecutivo</th>

                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <select name = "cedula" onChange={this.handleChange} ref={this.temp}>
                                {
                                    this.state.clientes.map((cliente)=>{
                                        return(
                                            <React.Fragment>
                                                <option value={cliente._id}> {cliente.cedula_cliente+"-"+cliente.nombre_cliente}</option>                                                
                                            </React.Fragment>
                                        )
                                    })
                                }
                                </select>
                            </td>

                            <td>
                                <input type ="text" name="customerid" id="customerid" ref={this.customerid} defaultValue={this.state.customerid}/>
                            </td>

                            <td>
                                <input type ="text" name="consecutivo" id="consecutivo"/>
                            </td>
                        </tr>

                    </tbody>
                </table>

                <table onChange={this.operacion} >
                    <thead>
                        <th>Producto</th>
                        <th>Valor Unitario</th>
                        <th>Cantidad</th>
                        <th>Valor Total</th>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <select name = "producto1">
                                {
                                    this.state.productos.map((producto)=>{
                                        return(
                                            <React.Fragment>
                                                <option value={producto.codigo_producto}> {producto.codigo_producto+"-"+producto.nombre_producto}</option>
                                            </React.Fragment>
                                        )
                                    })
                                }
                                </select>
                            </td>
                            <td>
                                <input type="text" name="valorUnitarioProducto1" ref={this.valorUnitarioP1}   />                            
                            </td>
                            <td>
                                <input type="text" name="cantidadProducto1"  ref={this.cantidadP1} />
                            </td>
                            <td>
                                <input type="text" name="valorTotalProducto1" ref={this.valorTotalP1} defaultValue={this.state.valorTotalP1}/>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <select name = "producto2">
                                {
                                    this.state.productos.map((producto)=>{
                                        return(
                                            <React.Fragment>
                                                <option value={producto.codigo_producto}> {producto.codigo_producto+"-"+producto.nombre_producto}</option>
                                                </React.Fragment>
                                        )
                                    })
                                }
                                </select>
                            </td>
                            <td>
                                <input type="text" name="valorUnitarioProducto2" ref={this.valorUnitarioP2}  defaultValue="0" />                            
                            </td>                               
                            <td>
                                <input type="text" name="cantidadProducto2" ref={this.cantidadP2}  defaultValue="0"/>
                            </td>
                            <td>
                                <input type="text" name="valorTotalProducto2" ref={this.valorTotalP2} defaultValue={this.state.valorTotalP2}/>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <select name = "producto3">
                                {
                                    this.state.productos.map((producto)=>{
                                        return(
                                            <React.Fragment>
                                                <option value={producto.codigo_producto}> {producto.codigo_producto+"-"+producto.nombre_producto}</option>
                                                </React.Fragment>
                                        )
                                    })
                                }
                                </select>
                            </td>
                            <td>
                                <input type="text" name="valorUnitarioProducto3"  ref={this.valorUnitarioP3} defaultValue="0" />                            
                            </td>                               
                            <td>
                                <input type="text" name="cantidadProducto3"  ref={this.cantidadP3} defaultValue="0"/>
                            </td>
                            <td>
                                <input type="text" name="valorTotalProducto3" ref={this.valorTotalP3} defaultValue={this.state.valorTotalP3}/>
                            </td>
                        </tr>

                        <tr>
                            <td></td>
                            <td></td>
                            <td>Total Venta<input type="text" name="totalVenta" ref={this.totalventa} defaultValue={this.state.totalventa}/></td>
                        </tr>

                        <tr>
                            <td></td>
                            <td></td>
                            <td>Total IVA<input type="text" name="totalIVA" ref={this.ivaventa} defaultValue={this.state.ivaventa}/></td>
                        </tr>

                        <tr>
                            <td></td>
                            <td><button onClick={this.guardarVenta}>Confirmar</button></td>
                            <td>Total con IVA<input type="text" name="totalConIVA" ref={this.totalventaconiva} defaultValue={this.state.totalventaconiva}/></td>
                        </tr>
                    </tbody>

                </table>
            </div>
            
        );
    }

}


export default Ventas;
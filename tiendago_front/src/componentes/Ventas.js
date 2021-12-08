import React, {Component} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert";




class Ventas extends Component{

    ventaId= null;
    cedula=React.createRef();    
    customerid=React.createRef();   

    temp=React.createRef();
    selectP1=React.createRef();   
    selectP2=React.createRef();
    selectP3=React.createRef();

    valorUnitarioP1 =React.createRef();
    cantidadP1 =React.createRef();
    valorUnitarioP2 =React.createRef();
    cantidadP2 =React.createRef();
    valorUnitarioP3 =React.createRef();
    cantidadP3 =React.createRef();

    iva1=React.createRef();

    valorIvaP1=React.createRef();
    valorIvaP2=React.createRef();
    valorIvaP3=React.createRef();

    valorTotalP1=React.createRef();
    valorTotalP2=React.createRef();
    valorTotalP3=React.createRef();

    clientecedula=React.createRef();
    consecutivo=React.createRef();

    totalventa=React.createRef();
    ivaventa=React.createRef();
    totalventaconiva=React.createRef();
    detalle_venta=React.createRef();

    state={
        clientes:[],
        cliente:[],

        productos:[],
        producto:[],
        producto2:[],
        producto3:[],

        ventas:[],

        iva1:null,
        iva2:null,
        iva3:null,

        codProd1:null,
        codProd2:null,
        codProd3:null,
        
        status:null,      
        selectedOption: null,

        customerid:null,

        cantidadP1:null,
         
        valorIvaP1:null,
        valorIvaP2:null,
        valorIvaP3:null,
        valorTotalP1:null,
        valorTotalP2:null,
        valorTotalP3:null,

        detalle_venta:[],
        
        clientecedula:null,
        consecutivo:null,
        totalventa:null,
        ivaventa:null,
        totalventaconiva:null                
    }



    componentWillMount(){
        this.getClientes();
        this.getProductos();
        this.getVentas();
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

    getCliente=(id) => {
        axios.get("http://localhost:8081/api/clientes/cliente/"+id)
             .then(res =>{
                  console.log(res.data);
                  this.setState({
                      cliente:res.data
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

    getProducto=(id) => {
        axios.get("http://localhost:8081/api/productos/producto/"+id)
             .then(res =>{
                  console.log(res.data);
                  this.setState({
                      producto:res.data,
                      iva1:res.data.iva_compra,
                      codProd1:res.data.codigo_producto
                  })
                });
    }

    getProducto2=(id) => {
        axios.get("http://localhost:8081/api/productos/producto/"+id)
             .then(res =>{
                  console.log(res.data);
                  this.setState({
                      producto2:res.data,
                      iva2:res.data.iva_compra,
                      codProd2:res.data.codigo_producto
                  })
                });
    }

    getProducto3=(id) => {
        axios.get("http://localhost:8081/api/productos/producto/"+id)
             .then(res =>{
                  console.log(res.data);
                  this.setState({
                      producto3:res.data,
                      iva3:res.data.iva_compra,
                      codProd3:res.data.codigo_producto
                  })
                });
    }

    getVentas = () => {
        axios.get("http://localhost:8081/api/ventas/")
                .then(res =>{
                   // console.log(res.data);
                    this.setState({
                        consecutivo:res.data.length,                        
                    })                    
                });
                
                
                
                
    }

    


    

    guardarVenta=(e)=> {

        var detalleventa1={
            cantidad_producto:Number(this.cantidadP1.current.value),
            codigo_producto:this.state.codProd1,
            valor_iva:Number(this.valorIvaP1.current.value),
            valor_total:Number(this.valorTotalP1.current.value),
            valor_venta:Number(this.valorIvaP1.current.value)+Number(this.valorTotalP1.current.value),
            };

        var detalleventa2={
            cantidad_producto:Number(this.cantidadP2.current.value),
            codigo_producto:this.state.codProd2,
            valor_iva:Number(this.valorIvaP2.current.value),
            valor_total:Number(this.valorTotalP2.current.value),
            valor_venta:Number(this.valorIvaP2.current.value)+Number(this.valorTotalP2.current.value),
            };

        var detalleventa3={
            cantidad_producto:Number(this.cantidadP3.current.value),
            codigo_producto:this.state.codProd3,
            valor_iva:Number(this.valorIvaP3.current.value),
            valor_total:Number(this.valorTotalP3.current.value),
            valor_venta:Number(this.valorIvaP3.current.value)+Number(this.valorTotalP3.current.value),
        };

                

        //this.setState({
          //  detalle_venta:detalleventa1
        //})
        console.log(detalleventa1)

        e.preventDefault();
        var venta={            
            cedula_cliente:Number(this.clientecedula.current.value),                        
            codigo_venta:Number(this.consecutivo.current.value), 
            detalle_venta:[detalleventa1,detalleventa2,detalleventa3],
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
        //alert(this.temp.current.value);
        var customer=this.temp.current.value;
        this.setState({customerid:customer});
        this.getCliente(customer);
    }

    handleChangeP1 = () => {        
        var product1 = this.selectP1.current.value;           
        this.getProducto(product1);        
    }

    handleChangeP2 = () => {
        var product2 = this.selectP2.current.value;        
        this.getProducto2(product2);
    }

    handleChangeP3 = () => {
        var product3 = this.selectP3.current.value;        
        this.getProducto3(product3);
    }

    operacion = (e) => {
        e.preventDefault();
        
        var vUnitP1 = Number(this.valorUnitarioP1.current.value);
        var vUnitP2 = Number(this.valorUnitarioP2.current.value);
        var vUnitP3 = Number(this.valorUnitarioP3.current.value);

        var cant1 = Number(this.cantidadP1.current.value);
        var cant2 = Number(this.cantidadP2.current.value);
        var cant3 = Number(this.cantidadP3.current.value);  
        
        
        
        var porcentajeIvaP1=Number(this.state.iva1/100);
        var porcentajeIvaP2=Number(this.state.iva2/100);
        var porcentajeIvaP3=Number(this.state.iva3/100);
        
        

        var vTotalP1 = vUnitP1*cant1;
        var vTotalP2 = vUnitP2*cant2;
        var vTotalP3 = vUnitP3*cant3;

        var vIvaP1 = vTotalP1*porcentajeIvaP1;
        var vIvaP2 = vTotalP2*porcentajeIvaP2;
        var vIvaP3 = vTotalP3*porcentajeIvaP3;

        var vTotal = vTotalP1+vTotalP2+vTotalP3;
        var ivaVenta = vIvaP1+vIvaP2+vIvaP3;
        var vTotalconIVA=vTotal+ivaVenta;
        

        this.setState({
            valorTotalP1:vTotalP1,
            valorTotalP2:vTotalP2,
            valorTotalP3:vTotalP3,
            
            valorIvaP1:vIvaP1,
            valorIvaP2:vIvaP2,
            valorIvaP3:vIvaP3,

            totalventa:vTotal,
            ivaventa:ivaVenta,
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
                        <th>Cédula</th>
                        <th>Nombre</th>
                        <th>Consecutivo</th>

                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <select name = "cedula" onChange={this.handleChange} ref={this.temp}>
                                {
                                    this.state.clientes.map((clientee)=>{
                                        return(
                                            <React.Fragment>
                                                <option value={clientee._id}> {clientee.cedula_cliente+"-"+clientee.nombre_cliente}</option>                                                
                                            </React.Fragment>
                                        )
                                    })
                                }
                                </select>
                            </td>

                            <td>
                                <input type ="text" name="Cedula" id="customercedula" ref={this.clientecedula} defaultValue={this.state.cliente.cedula_cliente} readonly="readonly"/>
                            </td>

                            <td>
                                <input type ="text" name="Cedula" id="customernombre" ref={this.clientenombre} defaultValue={this.state.cliente.nombre_cliente} readonly="readonly"/>
                            </td>

                            <td>
                                <input type ="text" name="consecutivo" id="consecutivo" ref={this.consecutivo} defaultValue={this.state.consecutivo} readonly="readonly"/>
                            </td>
                        </tr>

                    </tbody>
                </table>

                <table /*onChange={this.operacion}*/ >
                    <thead>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Valor Unitario</th>                        
                        <th>Valor Total (Antes de IVA)</th>
                        
                        <th>Valor IVA</th>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <select name = "producto1" onChange={this.handleChangeP1} ref={this.selectP1}>
                                {
                                    this.state.productos.map((productoo)=>{
                                        return(
                                            <React.Fragment>
                                                <option value={productoo._id}> {productoo.codigo_producto+"-"+productoo.nombre_producto}</option>
                                            </React.Fragment>
                                        )
                                    })
                                }
                                </select>
                            </td>
                            <td>
                                <input type="text" name="cantidadProducto1"  ref={this.cantidadP1} defaultValue="0"/>
                            </td>
                            <td>
                                <input type="text" name="valorUnitarioProducto1" ref={this.valorUnitarioP1} defaultValue={this.state.producto.precio_venta} readonly="readonly"  />                            
                            </td>                            
                            <td>
                                <input type="text" name="valorTotalProducto1" ref={this.valorTotalP1} defaultValue={this.state.valorTotalP1} readonly="readonly"/>
                            </td>                            
                            <td>
                                <input type="text" name="valorIvaProducto1" ref={this.valorIvaP1} defaultValue={this.state.valorIvaP1} readonly="readonly"/>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <select name = "producto2"  onChange={this.handleChangeP2} ref={this.selectP2}>
                                {
                                    this.state.productos.map((productoo)=>{
                                        return(
                                            <React.Fragment>
                                                <option value={productoo._id}> {productoo.codigo_producto+"-"+productoo.nombre_producto}</option>
                                                </React.Fragment>
                                        )
                                    })
                                }
                                </select>
                            </td>
                            <td>
                                <input type="text" name="cantidadProducto2" ref={this.cantidadP2}  defaultValue="0" />
                            </td>
                            <td>
                                <input type="text" name="valorUnitarioProducto2" ref={this.valorUnitarioP2}  defaultValue={this.state.producto2.precio_venta} readonly="readonly" />                            
                            </td>                                                           
                            <td>
                                <input type="text" name="valorTotalProducto2" ref={this.valorTotalP2} defaultValue={this.state.valorTotalP2} readonly="readonly"/>
                            </td>
                            <td>
                                <input type="text" name="valorIvaProducto2" ref={this.valorIvaP2} defaultValue={this.state.valorIvaP2} readonly="readonly"/>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <select name = "producto3" onChange={this.handleChangeP3} ref={this.selectP3}>
                                {
                                    this.state.productos.map((productoo)=>{
                                        return(
                                            <React.Fragment>
                                                <option value={productoo._id}> {productoo.codigo_producto+"-"+productoo.nombre_producto}</option>
                                                </React.Fragment>
                                        )
                                    })
                                }
                                </select>
                            </td>
                            <td>
                                <input type="text" name="cantidadProducto3"  ref={this.cantidadP3} defaultValue="0"/>
                            </td>
                            <td>
                                <input type="text" name="valorUnitarioProducto3"  ref={this.valorUnitarioP3}  defaultValue={this.state.producto3.precio_venta} readonly="readonly"/>                            
                            </td>                            
                            <td>
                                <input type="text" name="valorTotalProducto3" ref={this.valorTotalP3} defaultValue={this.state.valorTotalP3} readonly="readonly"/>
                            </td>
                            <td>
                                <input type="text" name="valorIvaProducto3" ref={this.valorIvaP3} defaultValue={this.state.valorIvaP3} readonly="readonly"/>
                            </td>
                        </tr>

                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Total Venta<input type="text" name="totalVenta" ref={this.totalventa} defaultValue={this.state.totalventa} readonly="readonly"/></td>
                        </tr>

                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Total IVA<input type="text" name="totalIVA" ref={this.ivaventa} defaultValue={this.state.ivaventa} readonly="readonly"/></td>
                        </tr>

                        <tr>
                            <td></td>
                            <td><button onClick={this.operacion}>Calcular</button></td>
                            <td><button onClick={this.guardarVenta}>Guardar Venta</button></td>
                            <td>Total con IVA<input type="text" name="totalConIVA" ref={this.totalventaconiva} defaultValue={this.state.totalventaconiva} readonly="readonly"/></td>
                        </tr>
                    </tbody>

                </table>
            </div>
            
        );
    }

}


export default Ventas;
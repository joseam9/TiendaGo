import React, { Component } from "react";
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom"
import MiComponente from "./componentes/MiComponente";
import Productos from "./componentes/Productos";
import AgregarProducto from "./componentes/AgregarProducto";
import EditarProducto from "./componentes/EditarProducto";
import Clientes from "./componentes/Clientes";
import AgregarCliente from "./componentes/AgregarCliente";
import EditarCliente from "./componentes/EditarCliente";
import Ventas from "./componentes/Ventas";
class Router extends Component{
    render(){
        return(
                        <BrowserRouter>
            <header className="App-header">
                <nav>
                    <ul>
                        
                        <li>
                            <NavLink to = "/productos">Productos</NavLink>
                        </li>
                        <li>
                            <NavLink to = "/clientes">Clientes</NavLink>
                        </li>
                        <li>
                            <NavLink to = "/ventas">Ventas</NavLink>
                        </li>
                        <li>
                            <NavLink to = "/reportes">Reportes</NavLink>
                        </li>
                        <li>
                            <NavLink to = "/consolidacion">Consolidación</NavLink>
                        </li>
                     </ul>
                </nav>
                </header>
                <Routes>
                    <Route path = "/ruta1" element={<MiComponente/>}/>
                    <Route path = "/productos" element={<Productos/>}/>
                    <Route path = "/agregarProducto" element={<AgregarProducto/>}/>
                    <Route path = "/editarProducto/:id" element={<EditarProducto/>}/>
                    <Route path = "/clientes" element={<Clientes/>}/>
                    <Route path = "/agregarCliente" element={<AgregarCliente/>}/>
                    <Route path = "/editarCliente/:id" element={<EditarCliente/>}/>
                    <Route path = "/ventas" element={<Ventas/>}/>
                </Routes>
            </BrowserRouter>
        );
    };
}

export default Router;
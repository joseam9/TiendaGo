import React, { Component } from "react";
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom"
import MiComponente from "./componentes/MiComponente";
import Productos from "./componentes/Productos";
import AgregarProducto from "./componentes/AgregarProducto";
import EditarProducto from "./componentes/EditarProducto";

class Router extends Component{
    render(){
        return(
            
            <BrowserRouter>
            <header className="App-header">
                <nav>
                    <ul>
                        <li>
                            <NavLink to = "/ruta1">Login</NavLink>
 
                        </li>
                        <li>

                            <NavLink to = "/productos">Productos</NavLink>
                        </li>
                        
                    </ul>
                </nav>
                </header>
                <Routes>
                    <Route path = "/ruta1" element={<MiComponente/>}/>
                    <Route path = "/productos" element={<Productos/>}/>
                    <Route path = "/agregarProducto" element={<AgregarProducto/>}/>
                    <Route path = "/editarProducto/:id" element={<EditarProducto/>}/>
                </Routes>
            
            </BrowserRouter>
        );
    };
}

export default Router;
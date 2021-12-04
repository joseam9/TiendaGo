
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';

import Router from './Router';
import {LoginButton} from "./componentes/Login";
import {LogoutButton} from "./componentes/Logout";
import {Profile} from "./componentes/Profile";

//import MiComponente from './componentes/MiComponente';

function App() {
  const {isAuthenticated} = useAuth0();
  return (
    <div className="App">

      <header className="App-header">
      <h1>TIENDA GO!  </h1>
        <p>          
          <img src="logo2.JPG" className="App-logo" alt="logo" />                
        </p>        
          
        
      </header>

      <div className="topcorner">
        {isAuthenticated?(
          <>
            <Profile />
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}    
      </div>

      <div className = "componentes">
        {isAuthenticated?(
          <>
            <Router/> 
          </>
        ) :  (<p>Debe iniciar sesión</p>)}        
      </div>

    </div>
  );
}

export default App;

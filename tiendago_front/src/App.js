import logo from './logo.svg';
import './App.css';

import Router from './Router';

//import MiComponente from './componentes/MiComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h3>TIENDA GO!</h3>
        </p>
       
      </header>

      <div className = "componentes">
        <Router/>
      </div>


    </div>
  );
}

export default App;

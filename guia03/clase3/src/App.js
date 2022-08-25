import poke from './poke.png';
import './App.css';
import ComponenteC from './Components/ComponenteC';
import ComponenteF from './Components/ComponenteF';
import Estado from './Components/Estado';
import EstadoES7 from './Components/EstadoES7';
import CicloVida from './Components/CicloVida';
import Api from './Components/Api';
import Pokemones from './Components/Pokemones';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={poke} className="App-logo" alt="poke" />
        <p>
          DPS Clase 3
        </p>
        
      </header>
      <ComponenteC></ComponenteC>
      <ComponenteF></ComponenteF>
     <Estado></Estado>
      <EstadoES7></EstadoES7>
      <hr/>
      <CicloVida></CicloVida>
      <hr/>
      <Api></Api>
      <Pokemones></Pokemones>
    </div>
  );
}

export default App;

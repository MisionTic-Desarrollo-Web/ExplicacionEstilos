import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'components/Card';


function App() {
  return (
    <div className="App">
      <span className='fondoNegro'>Hola mundo</span>
      <button type="button" className="btn btn-primary">Boton Inicio</button>
      <button type="button" className="btn btn-success">Success</button>
      <div className="alert alert-primary" role="alert">
      Esto es uan alerta!!!
</div>
      
<Card/>
    </div>
  );
}

export default App;

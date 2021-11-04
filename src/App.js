

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import Card from 'components/Card';


function App() {
  return (
    <div className="App">
      <div className='flex flex-col md:flex-row'>
        <div className='mx-2 bg-red-400'>Elemento 1</div>
        <div className='mx-2 bg-green-400'>Elemento 2</div>
        <div className='mx-2 bg-gray-500'>Elemento 3</div>
        <div className='mx-2 bg-blue-300'>Elemento 4</div>
        <button className='boton'>Haz Clic Aqui</button>
        <button className='boton'>
          Este es el boton 2
        </button>
      </div>          
    </div>
  );
}

export default App;

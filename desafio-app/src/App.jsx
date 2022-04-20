import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar';

  /* const arr = [1, 2, 3];
  const a = 4;
  const nuevoArr = [...arr, a, 5]; // spred operator
  console.log(nuevoArr); */

 /*  const comision = '31150'
  const profe = {
    nombre: 'Diego',
    apellido: 'Medina',
    ['comision-' + comision]: 'todos unos genios'  // prop dinamicas
  } */

  /* console.log(profe); 

  const { a: val } = { a: 2 }   // deep matching

  console.log(val); */

 /*  const [a = 1, b = 2 , c = 3, d = 4] = [1, 2, 3]  // asignacion en desestructuracion

  console.log(d);  // mostraria 4 */


function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} 



export default App;

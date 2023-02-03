import { useState } from 'react';
import './App.css';

function App() {
  const [valor, setValor] = useState('')

  const buscarResultado = async () =>{
     const apiKey = 'fb1CvmzqIIYRl2gsxMbOhk3x9JKFg6HDz_Qr8NZKK8Q'
     const URL = `https://api.unsplash.com/photos/?client_id=${apiKey}`;

     const response = await fetch(URL);
     const data = await response.json();
     console.log(data)
  }
  return (
    <div className="App">
       <input className='box-imput' placeholder='Buscar Imagenes' onChange={e=> setValor(e.target.value)}/>

       <button onClick={() => buscarResultado ()} className='btn' type=""> Buscar</button>
    </div>
  );
}

export default App;

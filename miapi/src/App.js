import { useState } from 'react';
import './App.css';
import { GrSearch } from "react-icons/gr";

function App() {
  const [valor, setValor] = useState('')
  
  const [resultados, setResultados] = useState([])

  const buscarResultado = async () =>{
     const apiKey = 'fb1CvmzqIIYRl2gsxMbOhk3x9JKFg6HDz_Qr8NZKK8Q'
     const URL = `https://api.unsplash.com/search/photos/?client_id=${apiKey}&query=${valor}&per_page=50`;

     const response = await fetch(URL);
     const data = await response.json();
     setResultados  (data.results)
     console.log(data);
  }
  return (
    <div className='contenedorprin'>

      <div className="app">

        <input className='box-imput' placeholder='Buscar Imagenes' onChange={e => setValor(e.target.value)} />

        <button onClick={() => buscarResultado()} className='btn' type=""><GrSearch className='lupa'/></button>
      </div>

      <div className='contenedordeimagenes' >
        {
          resultados.map((elemento, indice) => {
            return (
              
                <img key={indice} src={elemento.urls.regular} />
              

            )
          })
        }
      </div>
    
    </div>
  );
}

export default App;

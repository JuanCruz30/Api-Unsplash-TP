import { useState} from 'react';
import './App.css';

import InfiniteScroll from 'react-infinite-scroll-component';


function App() {
  const [valor, setValor] = useState('')

  const [resultados, setResultados] = useState([])



  const buscarResultado = async () => {
    const apiKey = 'fb1CvmzqIIYRl2gsxMbOhk3x9JKFg6HDz_Qr8NZKK8Q'
    const URL = `https://api.unsplash.com/search/photos?client_id=${apiKey}&query=${valor}&per_page=50`;

    const response = await fetch(URL);
    const data = await response.json();
    setResultados(data.results)
    console.log(data);
  }
  return (
    <div className='contenedorprin'>




      <div className='contenedordeimagenes' >

        <InfiniteScroll
          dataLength={resultados.length}
          next={buscarResultado}
          hasMore={true}
        >
          <div className="app">

            <input className='box-imput' placeholder='Buscar Imagenes' onChange={e => setValor(e.target.value)} />

            <button onClick={() => buscarResultado()} className='btn' type=""></button>
          </div>

          {
            resultados.map((elemento, indice) => {
              return (
                <div key={indice}>
                  <img src={elemento.urls.regular} />
                  <h1>{elemento.id}</h1>
                  <h2 >{elemento.user.location}</h2>

                </div>




              )

            })

          }
        </InfiniteScroll>
      </div >


    </div>
  );
}

export default App;
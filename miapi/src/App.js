import {  useEffect, useState} from 'react';
import './App.css';
import {motion} from 'framer-motion'
import { Box,Text, Input,Image, Button} from '@chakra-ui/react';





function App() {
  const [valor, setValor] = useState('')

  const [resultados, setResultados] = useState([])

 



  
  
  const buscarResultado = async () => {
    const apiKey = 'fb1CvmzqIIYRl2gsxMbOhk3x9JKFg6HDz_Qr8NZKK8Q'
    const URL = `https://api.unsplash.com/search/photos?client_id=${apiKey}&query=${valor}&page=10&per_page=50`;
    
    const response = await fetch(URL);
    const data = await response.json();
    setResultados(data.results)
    console.log(data);
    
    
  };
  
  
    useEffect(()=>{
      buscarResultado();
  },[]);
  

 
  
  return (
    <Box 
    gap='2rem'  display='flex' flexWrap='wrap' margin='auto' alignItems='center' flexDirection='column' justifyContent='center'>
    
        <Box display='flex'>
        <Input width='200px' placeholder='Buscar Imagenes' onChange={e => setValor(e.target.value)} />

         <Button onClick={() => buscarResultado() } >click</Button>
         
        
        </Box>
        <Box  gap='1rem' display='flex' flexWrap='wrap' width={{xl:'1200px',md: '800px'}} >
          
          
           {resultados.map((elemento, indice) => {
              return (
                <Box
                
                 
                 flexWrap='wrap'
                 boxShadow='dark-lg'
                 borderRadius='20px'
                 display='flex'
                 justifyContent='center' 
                 textAlign='center' 
                 flexDirection='column'  
                 width='380px' 
                 height='450px' 
                 key={indice}>
                  <Box margin='0 auto' width='300px'>
                    <Image boxShadow='2xl' width='100%' height='300px' objectFit='cover'  src={elemento.urls.regular}/>
                  </Box>
                  <motion.h1  animate={{ rotate: 360, marginTop:'20px',}}
                              transition={{ from: 90, duration: 2 }} >Ubicacion:{elemento.user.location}</motion.h1>

                  </Box>


              
                
                ) })

          }
          
        
        
          </Box>

    </Box>
  );
}

export default App;

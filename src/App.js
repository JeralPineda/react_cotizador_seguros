import { useState } from 'react';
import styled from '@emotion/styled';

import Formulario from './components/Formulario';

import Header from './components/Header';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';

const Contenedor = styled.div`
   max-width: 600px;
   margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
   background-color: #fff;
   padding: 3rem;
`;

function App() {
   const [resumen, setResumen] = useState({
      cotizacion: 0,
      datos: {
         marca: '',
         year: '',
         plan: '',
      },
   });

   // Extraer datos
   const { cotizacion, datos } = resumen;

   return (
      <Contenedor>
         <Header titulo='Cotizador de Seguros' />

         <ContenedorFormulario>
            <Formulario setResumen={setResumen} />

            <Resumen datos={datos} />

            <Resultado cotizacion={cotizacion} />
         </ContenedorFormulario>
      </Contenedor>
   );
}

export default App;

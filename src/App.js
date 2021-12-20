import { useState } from 'react';
import styled from '@emotion/styled';

import Formulario from './components/Formulario';

import Header from './components/Header';
import Resumen from './components/Resumen';

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
   const { datos } = resumen;

   return (
      <Contenedor>
         <Header titulo='Cotizador de Seguros' />

         <ContenedorFormulario>
            <Formulario setResumen={setResumen} />

            <Resumen datos={datos} />
         </ContenedorFormulario>
      </Contenedor>
   );
}

export default App;

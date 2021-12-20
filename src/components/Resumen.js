import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { textoCapitalizado } from '../helper';

const ContenedorResumen = styled.div`
   background-color: #00838f;
   color: #fff;
   padding: 1rem;
   margin-top: 1rem;
   text-align: center;
`;

const Resumen = ({ datos }) => {
   const { marca, year, plan } = datos;

   if (marca === '' || year === '' || plan === '') return null;

   return (
      <ContenedorResumen>
         <h2>Resumen de Cotización</h2>

         <ul>
            <li>Marca: {textoCapitalizado(marca)}</li>
            <li>Plan: {textoCapitalizado(plan)}</li>
            <li>Año del auto: {year}</li>
         </ul>
      </ContenedorResumen>
   );
};

Resumen.propTypes = {
   datos: PropTypes.object.isRequired,
};

export default Resumen;

import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Mensaje = styled.p`
   background-color: rgb(127, 224, 237);
   padding: 1rem;
   margin-top: 1rem;
   text-align: center;
`;

const ResultadoCotizacion = styled.div`
   text-align: center;
   padding: 0.5rem;
   border: 1px solid #26c6da;
   background-color: rgb(127, 224, 237);
   margin-top: 1rem;
   position: relative;
`;

const Total = styled.p`
   color: #00838f;
   padding: 1rem;
   text-transform: uppercase;
   font-weight: bold;
   margin: 0;
`;

const Resultado = ({ cotizacion }) => {
   return cotizacion === 0 ? (
      <Mensaje>Elige marca, año y tipo de seguro</Mensaje>
   ) : (
      <ResultadoCotizacion>
         <TransitionGroup
            //
            component='span'
            className='resultado'
         >
            <CSSTransition
               //
               classNames='resultado'
               key={cotizacion}
               timeout={{ enter: 500, exit: 500 }}
            >
               <Total>
                  El total es: $ <span>{cotizacion}</span>
               </Total>
            </CSSTransition>
         </TransitionGroup>
      </ResultadoCotizacion>
   );
};

Resultado.propTypes = {
   cotizacion: PropTypes.number.isRequired,
};

export default Resultado;

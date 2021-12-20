import React, { useState } from 'react';
import styled from '@emotion/styled';

import { calcuarMarca, obtenerDiferenciaYear, obtenerPlan } from '../helper';

// Styled Components
const Campo = styled.div`
   display: flex;
   margin-bottom: 1rem;
   align-items: center;
`;

const Label = styled.label`
   flex: 0 0 100px;
`;

const Select = styled.select`
   display: block;
   width: 100%;
   padding: 1rem;
   border: 1px solid #e1e1e1;

   --webkit-appearance: none;
`;

const InputRadio = styled.input`
   margin: 0 1rem;
`;

const Button = styled.button`
   background-color: #00838f;
   border: none;
   color: #fff;
   font-size: 16px;
   font-weight: bold;
   margin-top: 2rem;
   padding: 1rem;
   text-transform: uppercase;
   width: 100%;
   transition: background-color 0.3s ease;

   &:hover {
      background-color: #26c6da;
      cursor: pointer;
   }
`;

const Error = styled.div`
   background-color: rgb(255, 186, 186);
   color: red;
   padding: 1rem;
   width: 100%;
   text-align: center;
   margin-bottom: 2rem;
`;

const Formulario = () => {
   const [datos, setDatos] = useState({
      marca: '',
      year: '',
      plan: '',
   });

   const [error, setError] = useState(false);

   // Extraer los valores del state
   const { marca, year, plan } = datos;

   // Leer los datos del formulario y colocarlos en el state
   const obtenerInformacion = (e) => {
      setDatos({
         ...datos,
         [e.target.name]: e.target.value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      if (marca.trim() === '' || year.trim() === '' || plan.trim() === '') {
         setError(true);
         return;
      }

      setError(false);

      // Una base de 2000
      let resultado = 2000;

      // Obtener la diferencia de años
      const diferencia = obtenerDiferenciaYear(year);

      // Por cada año hay que restar el 3%
      resultado -= (diferencia * 3 * resultado) / 100;

      //   Americano 15%, Asiatico 5%, Europeo 30%
      resultado = calcuarMarca(marca) * resultado;

      // Basico ++20%, Completo 50%
      const incrementoPlan = obtenerPlan(plan);
      resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

      // Total
   };

   return (
      <form onSubmit={handleSubmit}>
         {error ? <Error>Todos los campos son obligatorios</Error> : null}

         <Campo>
            <Label>Marca</Label>
            <Select
               //
               name='marca'
               value={marca}
               onChange={obtenerInformacion}
            >
               <option value=''>-- Seleccione --</option>
               <option value='americano'>Americano</option>
               <option value='europeo'>Europeo</option>
               <option value='asiatico'>Asiatico</option>
            </Select>
         </Campo>

         <Campo>
            <Label>Año</Label>
            <Select
               //
               name='year'
               value={year}
               onChange={obtenerInformacion}
            >
               <option value=''>-- Seleccione --</option>
               <option value='2021'>2021</option>
               <option value='2020'>2020</option>
               <option value='2019'>2019</option>
               <option value='2018'>2018</option>
               <option value='2017'>2017</option>
               <option value='2016'>2016</option>
               <option value='2015'>2015</option>
               <option value='2014'>2014</option>
               <option value='2013'>2013</option>
               <option value='2012'>2012</option>
            </Select>
         </Campo>

         <Campo>
            <Label>Plan</Label>
            <InputRadio
               //
               type='radio'
               name='plan'
               defaultValue='basico'
               checked={plan === 'basico'}
               onChange={obtenerInformacion}
            />
            Basico
            <InputRadio
               //
               type='radio'
               name='plan'
               defaultValue='completo'
               checked={plan === 'completo'}
               onChange={obtenerInformacion}
            />
            Completo
         </Campo>

         <Button type='submit'>Cotizar</Button>
      </form>
   );
};

export default Formulario;

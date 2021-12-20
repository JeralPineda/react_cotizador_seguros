const Resumen = ({ datos }) => {
   const { marca, year, plan } = datos;

   if (marca === '' || year === '' || plan === '') return null;

   return (
      <>
         <h2>Resumen de Cotización</h2>

         <ul>
            <li>Marca: {marca}</li>
            <li>Plan: {plan}</li>
            <li>Año del auto: {year}</li>
         </ul>
      </>
   );
};

export default Resumen;

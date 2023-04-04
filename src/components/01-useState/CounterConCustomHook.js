import React from 'react';
import { useCounter } from '../../hooks/useCounter';  // Importamos nuestro Hook creado

import './Counter.css';

export const CounterConCustomHook = () => {

    const { state, increment, reset, decrement } = useCounter(80);   // Si no se manda nada el valor de default es 10 pero tomara el valor que le demos en "()", lo destructuramos 

    return (
        <>
          <h1>Counter con Hook: { state } </h1>  
          <hr/>
          <button onClick={ () => increment (2) } className="btn btn-primary"> + 1 </button> {/* () => decrement (2) es el factor de cambio incrementa de 2 en 2 */}
          <button onClick={ reset } className="btn btn-primary"> Reset </button>
          <button onClick={ () => decrement (2) } className="btn btn-primary"> - 1 </button> {/* () => decrement (2) es el factor de cambio decrementa de 2 en 2 */}

          {/* <button onClick={ increment } className="btn btn-primary"> + 1 </button>  */}
          {/* <button onClick={ increment } className="btn btn-primary"> + 1 </button>  */}
        
        </>
    )
}

import React, { useState } from 'react';
import './Counter.css';

export const CounterApp = () => {

    //    [Valor Actual, Valor Siguiente] = useState( Valor Inicial ); 
    const [state, setState] = useState( {   // el Valor Inicial es un OBJETO
            counter1: 10,
            counter2: 20
        } );   

    const { counter1, counter2 } = state; // Destructuramos el objeto 

    return (
        <>
            <h1>Counter { counter1 } </h1> {/* Mostramos el Valor Actual del counter1 */}
            <h1>Counter { counter2 } </h1> {/* Mostramos el Valor Actual del counter2 */}
            <hr></hr>  
            <button 
                className="btn btn-primary"
                onClick={ () => {   {/* Al dar Clock llamamos la funcion de flecha */} 
                    setState( {     /* Llamamos la funcion setState para darle el nuevo valor */
                        ...state,   /* Extrae todas las propiedades del objeto */
                        counter1: counter1 + 1  /* Pero al definir counter1 despues, se le asigna el counter1 + 1 */
                     } );  
                }}
            >
                +1
            </button>
            <button 
                className="btn btn-primary"
                onClick={ () => {   {/* Al dar Clock llamamos la funcion de flecha */} 
                    setState( {     /* Llamamos la funcion setState para darle el nuevo valor */
                        ...state,   /* Extrae todas las propiedades del objeto (Realiza una copia de todos los valores) */
                        counter2: counter2 - 1  /* Pero al definir counter2 despues, se le asigna el counter2 - 1 */
                     } );  
                }}
            >
                -1
            </button>
        </>
    )
}

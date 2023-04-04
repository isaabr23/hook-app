import { useState } from "react"

export const useCounter = ( EstadoInicial = 10) => { // valor de default = 10
    
    const [state, setState] = useState( EstadoInicial ) // 10

    const increment = ( factor = 1 ) => {   // se llama a useState que incrementa 1 al estate por default pero el factor lo tenemos de 2 en dos
        setState( state + factor );
    }

    const reset = () => {   // se llama a useState que incrementa 1 al estate por default pero el factor lo tenemos de 2 en dos
        setState( EstadoInicial );
    }

    const decrement = ( factor = 1 ) => {   // se llama a useState que decrementa 1 al estate por default pero el factor lo tenemos de 2 en dos
        setState( state - factor );
    }

    // Retornamos un objeto con los siguientes valores

    return {
        state,
        increment,
        reset,
        decrement
    };
}
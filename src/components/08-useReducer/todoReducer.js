// Este es el archivo de REDUCER 
// y Lo importaremos a TodoApp.js en la parte de useReducer

export const todoReducer = ( state = [], action ) => {

    //  La mayoria de las veces usaremos SWITCH

    switch ( action.type ) {
        case 'agregar':
            return [ ...state, action.payload ];

        case 'borrar':
            // Filter regresa todos los elementos que cumplan la condicion "todo.id es diferente a action.payload (viene el id) que quiero borrar"
            return state.filter( todo => todo.id !== action.payload );

        case 'hecho':
            return state.map( todo =>
                ( todo.id === action.payload )
                    ? { ...todo, done: !todo.done }
                    : todo    
            ); //***************************** */

        case 'hecho-largo':
            // map barre todo el arreglo (state) y retorna un valor de cada uno de los elementos
            return state.map( todo => {
                // si todo.id es igual al action.payload significa que debe cambiar 
                if (todo.id === action.payload) {
                    return {
                        // regresamos todo lo que el todo tenga
                        ...todo,
                        // y solo cambir el done: a lo contrario que tenga (true/false)
                        done: !todo.done
                    }
                } else {
                    // Si no son iguales solo regresa el arreglo barrido por map (todo)
                    return todo;
                }
            } ) 

        default:
            return state;
    }
}

// creamos el estado inicial
const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

// Creamos la funcion con el retur de el estado nuevo
// por default state  = initialState 
//Este es el REDUCER
const todoReducer = ( state = initialState, action ) => {

    if (action?.type === 'agregar') {   //El signo de interrogacion es para decirle por primera vez que si no hay nada asignado no deba hacer nada
    // [Coloca los estados anteriores, el objeto a agregar]
        return [ ...state, action.payload ]; // Este seria el nuevo state
    }

    return state;   // Este seria el estado de default, ya que siempre debe regresar un estado (initialState)
}

let todos = todoReducer();  // Se llama a la funcion y se asigna el reducer a una variable

//Nuevo objeto
const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
}

//Creamos una accion
const agregarTodoAction = {
    type: 'agregar',    // tipo de accion
    payload: newTodo    // lo que se agregara al reducer por medio de la accion
}
            //  estado anterior, accion
todos = todoReducer( todos, agregarTodoAction );

console.log(todos);
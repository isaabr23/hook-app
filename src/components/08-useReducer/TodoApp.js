import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

import './styles.css';


const init = () => {
    // No regresaremos un objeto (comentado) sino informacion del localStorage
    // Si existen "todos" tengo que regresarlos como arreglo y si no existen tengo que regresar un arreglo vacio que sera el initialState
    return JSON.parse(localStorage.getItem('Pandora')) || [];  // Esto se puede colocar en el InitialState pero fue ejemplo para usar el init
    // 'Pandora' debe llamrse igual al de localStorage.setItem('Pandora', JSON.stringify( todos ) );


    // return [{
    //     id: new Date().getTime(),
    //     descripcion: 'Aprender React',
    //     done: false
    // }];
}

export const TodoApp = () => {

    //destructuramos state => todos *** dispatch es el disparador del reducer ** es el initialState y lo mandamos vacio [] ** init es una funcion que se llama y le da el valor a initialState
    // Si un todos cambia es por que quiero guardarlo en el LocalStorage 
    const [ todos, dispatch ] = useReducer( todoReducer, [], init);

    // Se dispara solo cuando cambia la dependencia de "[todos]"
    // Si los "todo" cambia significa que tengo que guardar en LocalStorage ** eso hace este useEffect
    useEffect( () => {
        // Para guardan en el localStorage pero solo guarda strings
                        // lo llamaremos "Pandora" Inspeccionar/Applications/localStorage/http://localhost:3000/
        localStorage.setItem('Pandora', JSON.stringify( todos ) );
    }, [todos]);

    // Se borran al dar click por que tambien se manda a llamar el useEffect por que se cambio el "todos"  
    const handleBorrar = ( todoId ) => {
        // console.log(todoId);

        const action = {
            type: 'borrar',
            payload: todoId
        }

        dispatch( action );
    }

    const handleHecho = ( todoId ) => {
         
        dispatch({
            type: 'hecho',
            payload: todoId
        });
    }

    const handleAddTodo = ( newTodo) => {
        dispatch({
            type: 'agregar',
            payload: newTodo
        });
    }

    return (
        <div>
            <h1>TodoApp ({ todos.length })</h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={ todos }
                        handleBorrar={ handleBorrar } 
                        handleHecho={ handleHecho }  
                    />
                </div>
                <div className="col-5">
                    <TodoAdd 
                        handleAddTodo={ handleAddTodo }
                    />
                </div>
            </div>
        </div>
    )
}

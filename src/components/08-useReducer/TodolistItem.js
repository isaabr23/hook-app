import React from 'react';

export const TodolistItem = ({ todo, index, handleBorrar, handleHecho }) => {
    return (
        <li
                key={ todo.id }
                className="list-group-item"
            > 
            <p 
                            // Si todo.done esta en true entonces (&&) colocar la clase complete en caso contrario no hacer nada
                className={ `${ todo.done && 'complete'}` }
                onClick={ () => handleHecho(todo.id) }
            >
                    { index + 1 }. { todo.descripcion } 
            </p>

            <button
                className="btn btn-danger"
                onClick={ () => handleBorrar( todo.id )}
            >
                Borrar
            </button>
        </li>
    )
}

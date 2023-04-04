import React from 'react'
import { TodolistItem } from './TodolistItem'

export const TodoList = ({ todos, handleBorrar, handleHecho }) => {
    return (
        <ul className="list-group list-group-flush">
                {   
                        //  La i nos muestra el indice (1,2,3,4,5,etc...)
                    todos.map( (todo, i) => (
                        <TodolistItem 
                        key={ todo.id }
                        todo={ todo }
                        index={ i }
                        handleBorrar={ handleBorrar }
                        handleHecho={ handleHecho }
                        />
                ))    
            }
        </ul>
    )
}

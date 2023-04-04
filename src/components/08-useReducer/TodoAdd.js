import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

        // Destructuramos el useForm ya que es un objeto
        const [ {description}, handleInputChange, reset ] = useForm({
            //  Es el mismo que el name del input del formulario
            description: ''
        });

        const handleSubmit = (e) => {
            e.preventDefault(); //  Evitamos en refresh del formulario
            // Para que no se agreguen tareas vacias (trim elimina espacios y .lenght cuenta el string)
            if ( description.trim().length <= 1) {
                return;
        }

        //  Creamos el nuevo objeto que agregaremos
        const newTodo = {
            id: new Date().getTime(),
            descripcion: description,
            done: false
        };

        handleAddTodo( newTodo );
        reset(); // Se llama la funcion de reset y limpia la caja
    }
          
    return (
        <>
            <h4>Agregar ToDo</h4>
            <hr/>

            <form onSubmit={ handleSubmit }>
                <input  //Genera una caja
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Aprender ..."
                    autoComplete="off"  // Elimina el autoAcompletado
                    value={description}
                    onChange={ handleInputChange } // Escucha el cambio del useForm
                />

                    {/* type = submit dispara el formulario y lo controlamos con handleSubmit que recibira el e (evento)*/}
                <button 
                    type="submit"
                    className="btn btn-outline-primary mt-1 btn-block"
                >
                    Agregar
                </button>
            </form>  
        </>
    )
}

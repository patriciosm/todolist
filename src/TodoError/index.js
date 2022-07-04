import React from 'react';
import './TodoError.css';

function TodoError({error}) {

    return (
        <div class="TodoError">
            <p>Desespérate, hubo un error...</p>
            <p>{ error }</p>
        </div>
    )
}

export { TodoError };
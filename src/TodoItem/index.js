import React from 'react';
import './TodoItem.css';

function TodoItem(props) {

    return (
        <li className={`TodoItem ${props.completed && 'TodoItem--completed'}`}>
            <div>
                <span
                    className='TodoItem-check'
                    onClick={props.onComplete}
                >
                    <i className="fa-solid fa-circle-check"></i>
                </span>
            </div>
            
            <p className='TodoItem-p'>{props.text}</p>
            <div className='TodoItem-delete'>
                <i className="fa-solid fa-trash-can" onClick={props.onDelete}></i>
            </div>
        </li>
    );
}

export { TodoItem };
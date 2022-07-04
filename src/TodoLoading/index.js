import React from 'react';
import './TodoLoading.css';

function TodoLoading() {

    return (
        <div className="LoadingTodo-container">
            <div>
                <span className="LoadingTodo-check">
                    <i className="fa-solid fa-circle-check"></i>
                </span>
            </div>
            <p className="LoadingTodo-text">Cargando TODOs...</p>
            <div className="LoadingTodo-delete">
                <i className="fa-solid fa-trash-can"></i>
            </div>
        </div>
    )
}

export { TodoLoading };
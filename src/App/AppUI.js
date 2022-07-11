import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { Modal } from '../Modal';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from '../TodoForm';
import { TodoLoading } from '../TodoLoading';
import { TodoError } from '../TodoError';
import { TodoEmpty } from '../TodoEmpty';

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    toggleCompleteTodo,
    deleteTodos,
    openModal
  } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <div className='wrapper'>
        <div className='ContainerTodo'>
          
          <TodoCounter />
          <TodoSearch />

          <TodoList>
            {error && <TodoError error={error} />}
            {loading && <TodoLoading />}
            {(!loading && !searchedTodos.length) && <TodoEmpty />}

            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => toggleCompleteTodo(todo.text)}
                onDelete={() => deleteTodos(todo.text)}
              />
            ))}
          </TodoList>
        
          { openModal && (
            <Modal>
              <TodoForm />
            </Modal>
          )}

          <CreateTodoButton/>
        </div>
      </div>
    </React.Fragment>
  )
}

export { AppUI };
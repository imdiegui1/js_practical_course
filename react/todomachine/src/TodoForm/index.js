import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css'

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState();

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return(
        <form>
            <label>...</label>
            <textarea
                calue={newTodoValue}
                onChange={onChange}
                placeholder='Cortar cebollas'
            />
            <div>
                <button
                    type='button'
                    className="TodoForm-button TodoForm-button-cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    className="TodoForm-button TodoForm-button-add"
                    type='submit'
                    onClick={onSubmit}
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm };
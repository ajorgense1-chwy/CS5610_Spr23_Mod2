import React, { useContext, useState } from 'react';
import ToDoList from './ToDoList';
import { todoContext } from './ToDoContext';

function ToDoApps() {
    // see stateObject in ToDoContext
    //   --todoListState
    //   --setToDoListState
    const toDoStateObject = useContext(todoContext);
    const toDoListState = toDoStateObject.todoListState;
    const setToDoListState = toDoStateObject.setToDoListState;

    const [inputState, setInputState] = useState('');

    function onToDoInput(event) {
        const inputValue = event.target.value;
        setInputState(inputValue);
    }

    function onBtnPress() {
        toDoListState.push(inputState);
        setToDoListState([...toDoListState]);
        setInputState('');
    }

    return (<div>
        <ToDoList list={toDoListState} />
        <input value={inputState} onInput={onToDoInput}/>
        <button onClick={onBtnPress}> 
            Add Item
        </button>
    </div>)
}

export default ToDoApps;

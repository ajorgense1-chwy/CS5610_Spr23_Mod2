import React, { useContext } from 'react';

import './ToDoList.css';
import { todoContext } from './ToDoContext';


// props
//   --list (array of strings)
function ToDoList(props) {
    const toDoStateObject = useContext(todoContext);
    const toDoListState = toDoStateObject.todoListState;
    const setToDoListState = toDoStateObject.setToDoListState;

    const toDoListComponents = [];
    for(let i = 0; i < props.list.length; i++) {
        function removeFromToDoList() {
            toDoListState.splice(i, 1);
            console.log(toDoListState)
            setToDoListState([...toDoListState]);
        }

        const toDoListComponent = (
            <div className='ToDoRow'>
            <input type="checkbox" onClick={removeFromToDoList}></input>
            <div>{props.list[i]}</div>
        </div>)
        toDoListComponents.push(toDoListComponent);
    }

    return (<div>
        {toDoListComponents}
    </div>)
}

export default ToDoList;

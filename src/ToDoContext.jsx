import React, {createContext, useState} from 'react';

export const todoContext = createContext();

/*
<HuntersComponent>
    <div>Banana</div>
</HuntersComponent>

function HuntersComponent(prop) {
    props.children // (div.children)

}
*/

export function ToDoProvider(props) {
    const [todoListState, setToDoListState] = useState(
        [
            "Do Homework",
            "Take 2 Naps",
            "Eat Dinner",
        ]
    );

    const stateObject = {
        todoListState,
        setToDoListState,
    };

    return (
        <todoContext.Provider value={stateObject}>
            {props.children}
        </todoContext.Provider>
    );

}
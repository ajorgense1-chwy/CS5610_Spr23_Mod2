import React from 'react'
import ReactDOM from 'react-dom/client'
import Dice from './Dice';
import ToDoApps from './ToDoApp';
import {ToDoProvider} from './ToDoContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ToDoProvider>
      <React.StrictMode>
      <ToDoApps />
    </React.StrictMode>
  </ToDoProvider>,
)

// main
//   -- ToDoApp
//      -- ToDoList
import React from 'react'
import ReactDOM from 'react-dom/client'
import { CityContext } from './CityContext';
import CitySelectoryApp from './CitySelectorApp';
// import Dice from './Dice';
// import ToDoApps from './ToDoApp';
// import {ToDoProvider} from './ToDoContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <CityContext />
    </React.StrictMode>
)

// main
//   -- ToDoApp
//      -- ToDoList
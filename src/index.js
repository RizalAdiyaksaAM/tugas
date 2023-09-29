import ReactDOM from 'react-dom/client';
import '../src/assets/css/index.css';
import React, { useState } from "react";
import { TodoList } from './routes/TodoList';



export const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <TodoList/>
    </React.StrictMode>
  );
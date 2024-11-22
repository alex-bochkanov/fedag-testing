import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import './app.css'

function App(): JSX.Element {
  const [array, setArray] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        if (res.status === 200) {
          setArray(res.data);
        } else {
          throw new Error("Ошибка загрузки данных todo");
        }
      })
      .catch((err) => console.error("Ошибка", err));
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <ol>
          {array.map((todo, index) => (
            <li className={todo.completed ? 'completed' : ''} key={index}>{todo.title}</li>
          ))}
        </ol>
      </header>
    </div>
  );
}

export default App;

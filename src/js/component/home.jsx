import { array } from "prop-types";
import React, { useEffect, useState } from "react";
import { getalltodos, updatetodos } from "../todosmodel";

const localStorageKey = "Todos-key";
const Home = () => {
  const [ToDos, setToDos] = useState([]);
  //const [inputValue, setinputValue]= useState("");
  const [previousToDos, setPreviousTodos] = useState(ToDos);

  useEffect(async () => {
    let apitodos = await getalltodos();
    setToDos(apitodos);
    setPreviousTodos(apitodos);
  }, []);
  useEffect(() => {
    updatetodos(ToDos);
  }, [ToDos]);

  console.log(previousToDos);
  console.log(ToDos);
  console.log("===");
  let onTyping = (event) => {
    if (event.code == "Enter") {
      let newToDos = [...ToDos];
      newToDos.push({ label: event.target.value, done: true });
      setToDos(newToDos);
      setPreviousTodos(ToDos);
      //input gets cleare
      event.target.value = "";
    } else {
      //setinputValue(event.target.value);
      //console.log(inputValue);
    }
  };
  return (
    <div className="todo-container">
      <h1 className="todo-title">Todos</h1>
      <div className="todo-input-container">
        <input
          className="todo-input"
          onKeyUp={onTyping}
          type="text"
          placeholder="Add new Todo"
        />
      </div>
      <ul className="todo-ul">
        {ToDos.map((todo, index) => {
          console.log(todo);
          console.log("reference point");
          return (
            <li className="todo-item" key={index}>
              <input
                className="todo-checkbox"
                type="checkbox"
                checked={todo.done}
                onChange={() => {
                  let newToDos = [...ToDos];
                  newToDos[index].done = !todo.done;
                  setToDos(newToDos);
                  setPreviousTodos(ToDos);
                }}
              />
              <p className="todo-label">{todo.label}</p>
              {/* <p>{todo.done}</p>
              <p>{todo.done}</p> */}
              <button
                className="todo-delete"
                onClick={() => {
                  let newToDos = [...ToDos];
                  newToDos.splice(index, 1);
                  setToDos(newToDos);
                  setPreviousTodos(ToDos);
                }}
              >
                🗑️
              </button>
            </li>
          );
        })}
      </ul>
      <div className="todo-footer">
        <p className="todo-items-left">Pending to Do: {ToDos.length}</p>
        <button
          className="todo-undo"
          onClick={() => {
            setToDos(previousToDos);
          }}
        >
          Un Do
        </button>
        {/* clear button */}
        <button
          className="todo-clear"
          onClick={() => {
            // set an empty array
            let newToDos = [];
            setToDos([]);
            setPreviousTodos(ToDos);
          }}
        >
          Clear All
        </button>

        {/* the undo button */}
      </div>
    </div>
  );
};

export default Home;

// - Empty the input on
// - Add placeholder to input
// - Style todos
// - Save todos across browser refresh
// - Reset button to wipe all todos

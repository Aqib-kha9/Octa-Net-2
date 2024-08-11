import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./todoList.css";

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "Print bills", id: uuidv4(), isDone: false },
    { task: "Call Rampbo", id: uuidv4(), isDone: false },
    { task: "Print Statements all", id: uuidv4(), isDone: false },
    { task: "It be advisable for me to think about business content?", id: uuidv4(), isDone: false },
    { task: "For what reason would it be advisable for me to think.", id: uuidv4(), isDone: false },
    { task: "For what reason would it be advisable.", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos([...todos, { task: newTodo, id: uuidv4(), isDone: false }]);
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodo) => todos.filter((prevTodo) => prevTodo.id != id));
  };

  let markDoneAll = () => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };



  let markAsDone = (id) => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div className="container">
      <div className="sub-container">
        <p>
          <b>Awesome Todo List</b>
        </p>
        <div className="input-box">
          <input
            required
            type="text"
            placeholder="What do you need to do today?"
            value={newTodo}
            onChange={updateTodoValue}
          />

          <button className="btn btn-primary" onClick={addNewTask}>
            Add Task
          </button>
        </div>

        {todos.map((todo) => (
          <div className="d-flex parent mt-3" key={todo.id}>
            
            <div className="task-box d-flex gap-2">
              <i onClick={() => markAsDone(todo.id)}>
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="checkboxNoLabel"
                  value=""
                  aria-label="..."
                ></input>
              </i>
              <span
                style={todo.isDone ? { textDecoration: "line-through" ,color:"#0d6efd"} : {}}
              >
                {todo.task}
              </span>
            </div>
            <div className="delete">
              <i onClick={() => deleteTodo(todo.id)}>
                <b>
                  <i class="fa-solid fa-xmark"></i>
                </b>
              </i>
            </div>

          </div>
        ))}
        <hr />

        <button className="btn btn-outline-danger" onClick={markDoneAll}>Mark Done All</button>
      </div>
    </div>
  );
}

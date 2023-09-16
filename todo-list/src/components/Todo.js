import React from "react";

const Todo = ({text, todos, setTodos, todo}) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
        //setTodos is the function that can modify the state
        //find an elemetn that matches with whatever we clicked on, if it matches then it get rid of it
    };
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item
        }))
    }
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;

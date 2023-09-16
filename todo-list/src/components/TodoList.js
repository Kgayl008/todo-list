import React from "react";
import Todo from "./Todo";

const TodoList = ({todos, setTodos, filteredTodos }) => { // everytime there is a list on thing in react, you NEED to add a 'KEY'
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {
                filteredTodos.map((todo) => (
                    <Todo 
                    key={todo.id}
                    text={todo.text}
                    setTodos={setTodos}
                    todos={todos}
                    todo={todo}/>
                ))
            } </ul>
        </div>
    );
};

export default TodoList;

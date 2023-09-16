import React from "react";

const Form = ({setInputText, todos, setTodos, inputText, setStatus}) => { // Here I can write javascripe code and function
    const inputTextHandler = (e) => {
        console.log(e.target.value)
        setInputText(e.target.value)
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {
                text: inputText,
                completed: false,
                id: Math.random() * 1000
            }
        ]);
        setInputText("") // reset
    }
    const statusHandler = (e) => {
        setStatus(e.target.value)
        //to get the valuse of them input ALWAYS put (parameter).target.value
    };
    return (
        <div>
            <form>
                <input value={inputText}
                    onChange={inputTextHandler}
                    type="text"
                    className="todo-input"/>
                <button onClick={submitTodoHandler}
                    className="todo-button"
                    type="submit">
                    <i class="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select onClick={statusHandler} name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    );
};

export default Form;

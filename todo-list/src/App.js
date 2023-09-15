import React, {useState} from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
    const [inputText, setInputText] = useState("");
    // setInputText is out function that updates of variable. Pass it into the form as a props| Think of it as DATA
    const [todos, setTodos] = useState([]);
    return (
        <div className="App">
            <header>
                <h1>To-do List</h1>
            </header>
            <Form inputText={inputText}
                todos={todos}
                setTodos={setTodos}
                setInputText={setInputText}/>
            <TodoList todos={todos}/>
        </div>
    );
}

export default App;

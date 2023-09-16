import React, {useState, useEffect} from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
    const [inputText, setInputText] = useState("");
    // setInputText is out function that updates of variable. Pass it into the form as a props| Think of it as DATA
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    //all is the default 
    const [filteredTodos, setFilteredTodos] = useState();
    //RUN ONCE when the app start
    // useEffect(() =>{
    //   getLocalTodos();
    // }, []);
    //Function
    //USE EFFECT
     useEffect(() => {
      filterHandler();
    }, [todos, status]);
    const filterHandler = () => {
      // eslint-disable-next-line default-case
      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
          case "uncompleted":
            setFilteredTodos(todos.filter((todo) => todo.completed === false));
            break;
            default:
              setFilteredTodos(todos);
              break;
      }
    };
    // const saveLocalTodos = () =>  {
    //     localStorage.setItem("todos", JSON.stringify(todos));
    // };
    // const getLocalTodos = () => {
    //   if (localStorage.getItem("todos") == null) {
    //     localStorage.setItem("todos", JSON.stringify([]));
    //   } else {
    //     let todoLocal = localStorage.getItem("todos", JSON.stringify(todos))
    //     setTodos(todoLocal);
    //   }
    // }
    return (
        <div className="App">
            <header>
                <h1>To-do List</h1>
            </header>
            <Form inputText={inputText}
                todos={todos}
                setTodos={setTodos}
                setInputText={setInputText}
                setStatus={setStatus}
                />
            <TodoList 
            todos={todos} 
            setTodos={setTodos}
            filteredTodos={filteredTodos}/>
        </div>
    );
}
//useState is for managing component-specific state that 
//triggers re-renders when it changes, while useEffect is
//for handling side effects and executing code in response to component lifecycle events.
export default App;

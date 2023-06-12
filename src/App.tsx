import "./App.css";
import InputField from "./components/InputField";
import "./components/InputField.css";
import { useState } from "react";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(), todo , isDone:false}] )
      setTodo("");
    }
  };
  return (
    <>
      <div className="App">
        <span className="heading">TASKIFY</span>
        <InputField
          todo={todo}
          setTodo={setTodo}
          handleAdd={handleAdd}
        ></InputField>
      </div>
    </>
  );
};

export default App;

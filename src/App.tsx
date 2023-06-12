import "./App.css";
import InputField from "./components/InputField";
import "./components/InputField.css";
import { useState } from "react";

const App: React.FC = () => {
  const [todo, setTodo] = useState("");
  return (
    <>
      <div className="App">
        <span className="heading">TASKIFY</span>
        <InputField todo={todo} setTodo={setTodo}></InputField>
      </div>
    </>
  );
};

export default App;

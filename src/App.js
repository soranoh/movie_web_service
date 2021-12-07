import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return;
    }
    setToDoList((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  const onReset = () => {
    setToDoList([]);
    setToDo("");
  };

  return (
    <div>
      <h3>My To Do List ({toDoList.length})</h3>
      <form onSubmit={onSubmit}>
        <input type="text" value={toDo} placeholder="Write you to do..." onChange={onChange}/>
        <button>Add To Do</button>
        <button onClick={onReset}>reset</button>
      </form>
      <hr />
      <ul>
        {toDoList.map((item, index) => 
          <li key={index}>{item}</li>
        )}
      </ul>
    </div>
  );
}

export default App;
import { useState, useEffect } from "react";


/*
 * useEffect 로 지정할 경우 component 의 첫번째 render 시점에만 실행되고,
 * 이후에는 state 가 변경이 되어도 지정된 내용은 재실행되지 않게 보호해준다.
 */

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => {
    setCounter((prev) => prev+1);
  };

  console.log("Run All the Time");
  useEffect(() => console.log("Call the API Only Once"), []);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click</button>
    </div>
  );
}

export default App;
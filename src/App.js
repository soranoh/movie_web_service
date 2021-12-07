import { useState } from "react";

/*
 * state 가 변경이 되변은 App 컴퍼넌트의 모든 코드가 재실행되는 안 좋은 점이 있다.
 */
function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => {
    setCounter((prev) => prev+1);
  };

  console.log("call API");

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click</button>
    </div>
  );
}

export default App;
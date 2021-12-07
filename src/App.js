import { useState, useEffect } from "react";


/*
 * useEffect 로 지정할 경우 component 의 첫번째 render 시점에만 실행되고,
 * 이후에는 state 가 변경이 되어도 지정된 내용은 재실행되지 않게 보호해준다.
 * 특정 대상의 state 가 변경될 때에만 재실행을 원할 경우
 * useEffect(func, [Array])
 * Array 에 해당되는 대상을 기입한다.
 */

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => {
    setCounter((prev) => prev+1);
  };
  const onChange = (event) => {
    setKeyword(event.target.value);
  }

  useEffect(() => {
    console.log("run only once")
  }, []);
  useEffect(() => {
    console.log("run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("ruen when 'keyword' or 'counter' changes.");
  }, [keyword, counter]);

  return (
    <div>
      <input type="text" placeholder="Search here" value={keyword} onChange={onChange} />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click</button>
    </div>
  );
}

export default App;
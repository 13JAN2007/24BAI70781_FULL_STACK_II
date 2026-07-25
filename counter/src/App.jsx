import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(10);

  const addButton = () => {
    setCounter(counter + 1);
    console.log("Added");
  };

  const removeButton = () => {
    setCounter(counter - 1);
    console.log("Removed");
  };

  return (
    <>
      <h1>KRG1B</h1>

      <h2>Counter: {counter}</h2>

      <button onClick={addButton}>
        Add
      </button>

      <br />
      <br />

      <button onClick={removeButton}>
        Remove
      </button>
    </>
  );
}

export default App;
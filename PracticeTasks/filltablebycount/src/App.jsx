import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState("");
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    fetch("https://northwind.vercel.app/api/orders")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleClick = () => {
    setNewData(data.slice(0, count));
  };

  return (
    <div className="App">
      <label htmlFor="fetch">Count</label>
      <input
        type="text"
        name="fetch"
        onChange={(e) => setCount(e.target.value)}
      />
      <button onClick={handleClick}>GET</button>
      <ul>
        {newData && newData.map((e) => <li key={e.id}>{e.customerId}</li>)}
      </ul>
    </div>
  );
}

export default App;

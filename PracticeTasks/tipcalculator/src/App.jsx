import { useEffect, useState } from "react";
import "./assets/style.css";
function App() {
  const [tipObj, setTipObj] = useState({ bill: 50, percentage: 18, people: 1 });
  const [tipRes, setTipRes] = useState(0);
  const [tipPer, setTipPer] = useState(0);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTipObj({
      ...tipObj,
      [name]: value,
    });
  };

  useEffect(() => {
    setTipRes((tipObj.bill * tipObj.percentage) / 100);
    setTipPer((tipObj.bill * tipObj.percentage) / 100 / tipObj.people);
  }, [tipObj]);

  return (
    <div className="App">
      <label htmlFor="bill">Bill</label>
      <input
        type="number"
        name="bill"
        defaultValue={50}
        min={0}
        onChange={handleChange}
      />
      <label htmlFor="percentage">Tip Percentage</label>
      <input
        type="number"
        name="percentage"
        defaultValue={18}
        min={0}
        onChange={handleChange}
      />
      <label htmlFor="people">Number of People</label>
      <input
        type="number"
        name="people"
        defaultValue={1}
        min={1}
        onChange={handleChange}
      />
      <p>Total tip:{tipRes ? `$ ${tipRes.toFixed(2)}` : "--"}</p>
      <p>Tip per person:{tipRes ? `$ ${tipPer.toFixed(2)}` : "--"} </p>
    </div>
  );
}

export default App;

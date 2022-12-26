import { useState, useEffect } from "react";
import Table from "./Pages/TableData";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDAta();
  }, []);

  const getDAta = () => {
    fetch("https://northwind.vercel.app/api/orders")
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  const deleteProducts = (id) => {
    fetch(`https://northwind.vercel.app/api/orders/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.status == 200) {
        getDAta();
      }
    });
  };

  const updateMethod = (id, newData) => {
    fetch(`https://northwind.vercel.app/api/orders/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    }).then((res) => {
      if (res.status >= 200) {
        getDAta();
      }
    });
  };

  return (
    <Table
      data={data}
      deleteProducts={deleteProducts}
      updateMethod={updateMethod}
    />
  );
}

export default App;

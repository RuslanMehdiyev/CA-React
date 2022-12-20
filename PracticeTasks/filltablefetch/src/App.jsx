import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    fetch("https://northwind.vercel.app/api/orders")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <div>
        <input
          onChange={(e) => setSearchData(e.target.value)}
          type="text"
          value={searchData}
          placeholder="Search by customer Id"
        />
      </div>
      <table className="w3-table w3-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Customer Id</th>
            <th>Employee Id</th>
            <th>Order Date</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data
              .filter((e) => {
                return searchData == ""
                  ? e
                  : e.customerId.toLowerCase().includes(searchData);
              })
              .map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.customerId}</td>
                  <td>{item.employeeId}</td>
                  <td>{item.orderDate.substring(0, 4)}</td>
                  <td>
                    <button>Delete</button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

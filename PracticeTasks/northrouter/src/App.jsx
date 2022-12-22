import "./assets/style.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductsDetails from "./pages/ProductsDetails";
import { useState } from "react";
import { useEffect } from "react";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://northwind.vercel.app/api/suppliers")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <div className="App">
      <header>
        <ul style={{ display: "flex", justifyContent: "space-around" }}>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/suppliers"}>Products</Link>
          </li>
          <li>
            <Link to={"/suppliers/:id"}>Products Details</Link>
          </li>
        </ul>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/suppliers" element={<Products data={data} />} />
          <Route path="/suppliers/:id" element={<ProductsDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

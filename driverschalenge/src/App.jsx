import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { driversContext } from "./storeContext/driversContext";
import Favorites from "./pages/Favorites";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./assets/style.css";

function App() {
  const { setData, setLoading, itemOffset } = useContext(driversContext);

  useEffect(() => {
    setLoading(true);
    fetch(`http://ergast.com/api/f1/drivers.json?limit=30&offset=${itemOffset}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.MRData.DriverTable.Drivers);
        setLoading(false);
      });
  }, [itemOffset]);
  return (
    <>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

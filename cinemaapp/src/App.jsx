import "./assets/style.css";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import WishList from "./components/WishList";
import Home from "./components/Home";
function App() {
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [searchValue, setSearchValue] = useState("harry");
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [wish, SetWish] = useState([]);

  useEffect(() => {
    fetch("https://www.omdbapi.com/?s=harry&apikey=129fb3f0")
      .then((res) => res.json())
      .then((data) => {
        setData(data.Search);
        setAllData(data.Search);
        setLoading(false);
      });
  }, []);

  const callFetch = () => {
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=129fb3f0`)
      .then((res) => res.json())
      .then((e) => {
        setData(e.Search);
        setAllData([...allData, ...e.Search]);
      });
  };

  useEffect(() => {
    callFetch();
  }, []);

  const addToWish = (id) => {
    SetWish([...wish, { id: id }]);
  };

  const removeFromWish = (id) => {
    SetWish([...wish.filter((e) => e.id !== id)]);
  };

  return (
    <>
      {modal && (
        <WishList
          setModal={setModal}
          wish={wish}
          allData={allData}
          remove={removeFromWish}
        />
      )}
      <div className="App">
        <Header
          setSearchValue={setSearchValue}
          callFetch={callFetch}
          badge={wish.length}
          setModal={setModal}
        />
        {loading ? (
          <Loader />
        ) : (
          <div className="list">
            {data ? (
              data.map((item, key) => {
                let check = wish.find((t) => t.id === item.imdbID);
                return (
                  <Home
                    item={item}
                    key={key}
                    add={addToWish}
                    remove={removeFromWish}
                    check={check}
                  />
                );
              })
            ) : (
              <h2>Data Not Found</h2>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default App;

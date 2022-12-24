import { useContext } from "react";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";
import { driversContext } from "../storeContext/driversContext";

function Home() {
  const { data, isLoading, favorites, setFavorites,handleDelete } =
    useContext(driversContext);
  const handleAdd = (item) => {
    let checkForFavorites = favorites.find((e) => e.driverId == item.driverId);
    if (!checkForFavorites) {
      setFavorites([...favorites, item]);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Driver Name</th>
                <th>Permanent Number</th>
                <th>Nationality</th>
                <th>DOB</th>
                <th>Information</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item, key) => {
                  let check = favorites.find(
                    (e) => e.driverId == item.driverId
                  );
                  return (
                    <tr key={key}>
                      <td>
                        {item.givenName} {item.familyName}
                      </td>
                      <td
                        style={{
                          backgroundColor: item.permanentNumber ? "" : "red",
                        }}
                      >
                        {item?.permanentNumber}
                      </td>
                      <td>{item.nationality}</td>
                      <td>{item.dateOfBirth}</td>
                      <th>
                        <a target="_blanc" href={item.url}>
                          Information
                        </a>
                      </th>
                      <th>
                        {check ? (
                          <button
                            className="deleteBtn"
                            onClick={() => handleDelete(item)}
                          >
                            Delete from Favorites
                          </button>
                        ) : (
                          <button
                            onClick={() => handleAdd(item)}
                            className="addBtn"
                          >
                            Add To Favorites
                          </button>
                        )}
                      </th>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      <Pagination />
    </>
  );
}

export default Home;

import { useContext } from "react";
import { driversContext } from "../storeContext/driversContext";

function Favorites() {
  const { favorites, setFavorites, handleDelete } = useContext(driversContext);

  return (
    <>
      {favorites.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Driver Name</th>
              <th>Permanent Number</th>
              <th>Nationality</th>
              <th>DOB</th>
              <th>Information</th>
              <th>
                <button className="deleteBtn" onClick={() => setFavorites([])}>
                  Clear All
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {favorites &&
              favorites.map((item, key) => (
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
                    <button
                      onClick={() => handleDelete(item)}
                      className="deleteBtn"
                    >
                      Delete from Favorites
                    </button>
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <h1 style={{marginTop:"2rem"}}>Favorites list is Empty</h1>
      )}
    </>
  );
}

export default Favorites;

import { useNavigate } from "react-router-dom";

function Products({ data }) {
  const navigate = useNavigate();
  const handleId = (id) => {
    navigate("/suppliers/" + id);
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Company Name</th>
            <th>Contact Name</th>
            <th>Contact Title</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.companyName}</td>
              <td>{item.contactName}</td>
              <td>{item.contactTitle}</td>
              <td>
                <button onClick={() => handleId(item.id)}>Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;

import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductsDetails() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch("https://northwind.vercel.app/api/suppliers/" + id)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
     
        <>
          <h1>{data.companyName}</h1>
          <h2>{data.contactName}</h2>
          <h3>{data.contactTitle}</h3>
        </>

    </div>
  );
}

export default ProductsDetails;

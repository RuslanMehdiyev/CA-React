import { useState } from "react";
import { createContext } from "react";

export const driversContext = createContext(null);

export const DriverProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [itemOffset, setItemOffset] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const handleDelete = (e) => {
    const filteredFavorites = favorites.filter((q) => q.driverId != e.driverId);
    setFavorites([...filteredFavorites]);
  };

  const values = {
    data,
    setData,
    isLoading,
    setLoading,
    itemOffset,
    setItemOffset,
    favorites,
    setFavorites,
    handleDelete,
  };

  return (
    <driversContext.Provider value={values}>{children}</driversContext.Provider>
  );
};

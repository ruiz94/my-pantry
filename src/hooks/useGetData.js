import { useEffect, useState } from "react";
// Api
import api from "../api";

const useGetData = (section) => {
  const [products, setProducts] = useState([]);
  const [listName, setListName] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await api.getProducts(section);
      if (response.status === "success") {
        if (response.data.status) {
          setProducts(response.data.products);
        } else {
          setProducts(response.data);
        }
        setListName(response.data.name);
      }
    };
    getData();
  }, [section]);

  return { products, listName };
};

export default useGetData;

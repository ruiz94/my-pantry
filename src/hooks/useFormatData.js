import { useEffect, useState } from "react";
import useGetData from "./useGetData";

export const formattedData = (products) =>
  Object.values(
    products.reduce((ack, value) => {
      ack[value.category] = ack[value.category] || {
        name: value.category,
        totalQuantity: 0,
        items: [],
        id: value.id,
      };
      ack[value.category].totalQuantity += value.quantity || 0;
      ack[value.category].items.push(value);

      return ack;
    }, [])
  );

const useFormatData = (section) => {
  const { products, listName } = useGetData(section);
  const [items, setItems] = useState([]);
  const [itemActive, setItemActive] = useState("Produce");

  const handleChangeItemActive = (name) => {
    setItemActive((prev) => (prev === name ? "" : name));
  };

  useEffect(() => {
    let newProducts = [];
    if (Object.values(products).length > 0) {
      newProducts = formattedData(products);
    }
    setItems(newProducts);
  }, [products]);

  return { items, itemActive, handleChangeItemActive, listName };
};

export default useFormatData;

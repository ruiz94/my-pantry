import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { formattedData } from "../hooks/useFormatData";
import BodyLiItem from "./BodyLiItem";

import { WrapperLi, WrapperCategories } from "./LiItem.styled";
import arrowLi from "../images/icons/arrow-li.png";

const DrawLiItems = ({ items, itemActive, handleActive }) => {
  const { currentShoppingList, permits } = useSelector((state) => state);
  const [refactoredItems, setRefactoredItems] = useState([]);

  useEffect(() => {
    if (
      permits.isNewShoppingList &&
      Object.values(currentShoppingList).length > 0
    ) {
      const newItems = formattedData(currentShoppingList.items);
      setRefactoredItems(newItems);
    } else {
      setRefactoredItems(items);
    }
  }, [items, currentShoppingList, permits]);

  const getQuantity = (value) =>
    `${value.items.length} (${value.totalQuantity || 0})`;

  return (
    <WrapperCategories>
      {refactoredItems &&
        refactoredItems.map((item) => (
          <WrapperLi
            key={item.id}
            className={itemActive === item.name && "open"}
          >
            <div className="headerLi">
              <div className="title">{item.name}</div>
              <button
                className="action"
                onClick={() => handleActive(item.name)}
              >
                <div className="quantity">{getQuantity(item)}</div>
                <img src={arrowLi} alt="arrow" />
              </button>
            </div>
            <div className="bodyLi">
              <BodyLiItem items={item.items} />
            </div>
          </WrapperLi>
        ))}
    </WrapperCategories>
  );
};

export default DrawLiItems;

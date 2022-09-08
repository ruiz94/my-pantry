import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
// Custom Hooks
import usePermits from "../hooks/usePermits";
import useFormatData from "../hooks/useFormatData";
// Components
import Layout from "../components/Layout";
import DrawLiItems from "../components/DrawLiItems";
// Styles
import { WrapperInput, WrapperButtonSave } from "./NewShoppingList.styled";
// API
import api from "../api";

const NewShoppingList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { currentShoppingList } = useSelector((state) => state);
  const [listName, setListName] = useState(currentShoppingList.name);
  const { itemActive, handleChangeItemActive } = useFormatData("products");
  usePermits({
    incrementDecrement: true,
    isNewShoppingList: true,
  });

  const handleChange = (e) => {
    setListName(e.target.value);
  };

  useEffect(() => {
    dispatch({ type: "CHANGE_NAME", payload: listName });
  }, [listName, dispatch]);

  const handleSaveShoppingList = async () => {
    if (
      currentShoppingList.name === "" ||
      !currentShoppingList.items.some((item) => item.quantity > 0)
    ) {
      alert("You might add a name");
      return;
    }
    const newItems = currentShoppingList.items
      .map((item) => ({
        ...item,
        status: "pending",
      }))
      .filter((item) => item.quantity > 0);

    const newShoppingList = {
      id: uuidv4(),
      name: currentShoppingList.name,
      status: currentShoppingList.status,
      products: newItems,
      date: new Date(),
    };

    const data = await api.addShoppingList(newShoppingList);
    if (data.status === "success") {
      dispatch({ type: "DELETE_UNSAVED_LIST" });
      history.push("/shopping-lists");
    }
  };

  return (
    <Layout back="/shopping-lists" title="New Shopping List">
      <WrapperInput>
        <input type="text" value={listName} onChange={(e) => handleChange(e)} />
      </WrapperInput>
      <DrawLiItems
        itemActive={itemActive}
        handleActive={handleChangeItemActive}
      />
      <WrapperButtonSave onClick={() => handleSaveShoppingList()}>
        Save
      </WrapperButtonSave>
    </Layout>
  );
};

export default NewShoppingList;

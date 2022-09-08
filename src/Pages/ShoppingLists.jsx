import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// Components
import Layout from "../components/Layout";
import ShoppingListItem from "../components/ShoppingListItem";
import Loader from "../components/Loader";

// styles
import { WrapperButtonAddNew } from "./ShoppingList.styled";
// API
import api from "../api";

const ShoppingLists = () => {
  const [shoppingLists, setShoppingLists] = useState([]);
  const { currentShoppingList } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [deletedState, setDeletedState] = useState(false);
  // console.log(currentShoppingList);

  useEffect(() => {
    const getShoppingList = async () => {
      const response = await api.getShoppingLists();
      if (response.status === "success") {
        console.log(response.data);
        setShoppingLists(response.data.reverse());
      }
    };
    getShoppingList();
  }, [deletedState]);

  const deleteList = async (id) => {
    console.log(id);
    const data = await api.deleteShoppingList(id);
    console.log(data);
    if (data.status === "success") {
      alert("Item deleted successfully");
      setDeletedState((prev) => !prev);
    }
  };

  const deleteUnsavedList = () => {
    dispatch({ type: "DELETE_UNSAVED_LIST" });
  };

  const shoppingListHaveProducts = (shList) => {
    return (
      Object.values(shList).length > 0 &&
      (shList.name || shList.items.some((item) => item.quantity > 0))
    );
  };

  return (
    <Layout title="Shopping Lists" back="/">
      {shoppingListHaveProducts(currentShoppingList) ? (
        <>
          <h3>Unsaved shopping list</h3>
          <ShoppingListItem
            list={currentShoppingList}
            deleteList={deleteUnsavedList}
          />
          <hr />
        </>
      ) : (
        <WrapperButtonAddNew>
          <Link to="/shopping-list/new">Add new</Link>
        </WrapperButtonAddNew>
      )}
      {shoppingLists.map((list) => (
        <ShoppingListItem key={list.id} list={list} deleteList={deleteList} />
      ))}
      {shoppingLists.length === 0 && <h2>There's no data</h2>}
    </Layout>
  );
};

export default ShoppingLists;

import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import api from "../api/index";

// Components
// import Layout from "../components/Layout";
import Home from "../Pages/Home";
import Stock from "../Pages/Stock";
import ShoppingLists from "../Pages/ShoppingLists";
import NotFound from "../Pages/NotFound";
import ShoppingListDetail from "../components/ShoppingListDetail";
import Products from "../Pages/Products";
import NewProducts from "../components/NewProduct";
import NewShoppingList from "../Pages/NewShoppingList";

const Routing = () => {
  const { currentShoppingList } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      const response = await api.getProducts("products");
      dispatch({ type: "ADD_UNSAVED_LIST", payload: response.data });
    };
    console.log(
      "Routing",
      Object.values(currentShoppingList.items).length <= 0
    );
    if (Object.values(currentShoppingList.items).length <= 0) {
      getProducts();
    }
  }, [currentShoppingList, dispatch]);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/stock" component={Stock} />
        <Route path="/products" component={Products} />
        <Route path="/new-product" component={NewProducts} />
        <Route path="/shopping-lists" component={ShoppingLists} />
        <Route path="/shopping-list/new" exact component={NewShoppingList} />
        <Route path="/shopping-list/:id" component={ShoppingListDetail} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routing;

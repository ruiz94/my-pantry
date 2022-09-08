import { Link } from "react-router-dom";

// Components
import Layout from "../components/Layout";

// Styles
import { Item, Items } from "./Home.styled";

// Icons
import IconStock from "../images/icons/my-stock-item.png";
import IconShoppingLists from "../images/icons/shopping-lists-icon.png";
import IconProducts from '../images/icons/products.png';

const Home = () => {
  return (
    <Layout title="My Pantry" back="">
      <Items>
        <Item>
          <Link to="/stock">
            <div className="name">My Stock</div>
            <img src={IconStock} alt="My stock icon" />
          </Link>
        </Item>
        <Item>
          <Link to="/shopping-lists">
            <div className="name">Shopping Lists</div>
            <img src={IconShoppingLists} alt="My stock icon" />
          </Link>
        </Item>
        <Item>
          <Link to="/products">
            <div className="name">Products</div>
            <img src={IconProducts} alt="Products" />
          </Link>
        </Item>
      </Items>
    </Layout>
  );
};

export default Home;

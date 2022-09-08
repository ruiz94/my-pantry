// Components
import Layout from "../components/Layout";
import DrawLiItems from "../components/DrawLiItems";
import useFormatData from "../hooks/useFormatData";
import usePermits from "../hooks/usePermits";
import { useSelector } from "react-redux";

const Stock = () => {
  const { items, itemActive, handleChangeItemActive } = useFormatData("stock");
  const { currentShoppingList } = useSelector((state) => state);
  usePermits({ canAdd: true });
  // console.log(currentShoppingList);
  return (
    <Layout title="My stock" back="/">
      {/* <ul>{drawLiItems(items)}</ul> */}
      <DrawLiItems
        items={items}
        itemActive={itemActive}
        handleActive={handleChangeItemActive}
      />
    </Layout>
  );
};

export default Stock;

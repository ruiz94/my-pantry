import { useParams } from "react-router-dom";
import useFormatData from "../hooks/useFormatData";
import Layout from "./Layout";
import DrawLiItems from "./DrawLiItems";
import Loader from "./Loader";
import { WrapperName } from "./ShoppingListDetail.styled";
import usePermits from "../hooks/usePermits";

const ShoppingListDetail = () => {
  const { id } = useParams();
  const { items, itemActive, handleChangeItemActive, listName } = useFormatData(
    `shopping_lists/${id}`
  );
  usePermits({
    canDelete: true,
  });

  return (
    <Layout title="Shopping List Detail" back="/shopping-lists">
      <WrapperName>
        <p>{listName}</p>
      </WrapperName>
      <DrawLiItems
        items={items}
        itemActive={itemActive}
        handleActive={handleChangeItemActive}
      />
      {!items.length && <Loader />}
    </Layout>
  );
};

export default ShoppingListDetail;

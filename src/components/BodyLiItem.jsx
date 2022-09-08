import { useDispatch, useSelector } from "react-redux";
import addIcon from "../images/icons/add-icon.png";
import deleteIcon from "../images/icons/delete-icon.png";
import { WrapperBody, WrapperItem } from "./BodyLiItem.styled";

const Item = ({ value }) => {
  const dispatch = useDispatch();
  const { permits } = useSelector((state) => state);

  return (
    <WrapperItem className="item">
      {permits.canDelete ? (
        <button
          className="icon"
          onClick={() => dispatch({ type: "DELETE_ITEM", item: value })}
        >
          <img src={deleteIcon} alt="delete icon" />
        </button>
      ) : (
        permits.canAdd && (
          <button
            className="icon"
            onClick={() => dispatch({ type: "INCREMENT_ITEM", item: value })}
          >
            <img src={addIcon} alt="add icon" />
          </button>
        )
      )}

      <div className="name">{value.name}</div>
      <div className="img">
        <span
          className="iconify"
          data-icon={value.nameIcon}
          data-width="40"
        ></span>
      </div>
      {permits.incrementDecrement ? (
        <div className="actions">
          <button
            onClick={() => dispatch({ type: "DECREMENT_ITEM", item: value })}
          >
            <img src={deleteIcon} alt="decrement" />
          </button>
          {value.quantity || 0}
          <button
            onClick={() => dispatch({ type: "INCREMENT_ITEM", item: value })}
          >
            <img src={addIcon} alt="increment" />
          </button>
        </div>
      ) : (
        <div className={`quantity ${value.quantity === 0 && "void"}`}>
          {value.quantity || 0}
        </div>
      )}
    </WrapperItem>
  );
};

const BodyLiItem = ({ items }) => {
  return (
    <WrapperBody>
      {items.map((item) => (
        <Item key={item.id} value={item} />
      ))}
    </WrapperBody>
  );
};

export default BodyLiItem;

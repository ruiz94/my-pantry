import deleteIcon from "../images/icons/delete-icon.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import formatDate from '../helpers/formatDate';

const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  margin: 1rem 0;

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    box-sizing: border-box;
  }
  button {
    background-color: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
  }
  .delete {
    position: absolute;
    right: -8px;
    top: -8px;
  }
  .title {
    color: #666666;
    font-size: 18px;
    font-weight: 600;
  }
  .details {
    color: #c0c0c0;
  }
`;

const ShoppingListItem = ({ list, deleteList }) => {
  return (
    <Wrapper>
      <button className="delete" onClick={() => deleteList(list.id)}>
        <img src={deleteIcon} alt="delete icon" />
      </button>
      <Link to={`/shopping-list/${list.id || "new"}`}>
        <div className="title">{list.name || "Unnamed"}</div>
        <div className="details">
          <div className="status">Status: {list.status}</div>
          <div className="date">Date: {formatDate(list.date)}</div>
        </div>
      </Link>
    </Wrapper>
  );
};

export default ShoppingListItem;

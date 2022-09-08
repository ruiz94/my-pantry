const initialState = {
  name: "",
  items: [],
  status: "pending",
};

const currentShoppingList = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return {
        ...state,
        name: action.payload,
      };
    case "INCREMENT_ITEM":
      return {
        ...state,
        items: state.items.map((item) => {
          return item.id === action.item.id
            ? { ...item, quantity: (item.quantity || 0) + 1 }
            : item;
        }),
      };
    case "DECREMENT_ITEM":
      return {
        ...state,
        items: state.items.map((item) => {
          return item.id === action.item.id && item.quantity > 0
            ? { ...item, quantity: (item.quantity || 0) - 1 }
            : item;
        }),
      };
    case "ADD_UNSAVED_LIST":
      return { ...state, items: [...action.payload] };
    case "DELETE_UNSAVED_LIST":
      return initialState;
    default:
      return state;
  }
};

export default currentShoppingList;

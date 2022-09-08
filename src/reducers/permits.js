const initialState = {
  canDelete: false,
  canAdd: false,
  incrementDecrement: false,
  isNewShoppingList: false
};

const permits = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_PERMITS":
      return { ...initialState, ...action.payload };
    default:
      return state;
  }
};

export default permits;

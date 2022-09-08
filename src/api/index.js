const URL = "http://localhost:9000";

const api = {
  // Products
  getProducts: async (section) => {
    try {
      console.log(section);
      const response = await fetch(`${URL}/${section}`);
      const data = await response.json();
      return { data, status: "success" };
    } catch (error) {
      return { error, status: "error" };
    }
  },
  //Shopping Lists
  getShoppingLists: async () => {
    try {
      const response = await fetch(`${URL}/shopping_lists`);
      const data = await response.json();
      return { status: "success", data };
    } catch (error) {
      return { error, status: "error" };
    }
  },
  addShoppingList: async (shList) => {
    try {
      const response = await fetch(`${URL}/shopping_lists`, {
        method: "POST",
        body: JSON.stringify(shList),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return { status: "success", data };
    } catch (error) {
      return { error, status: "error" };
    }
  },
  deleteShoppingList: async (id) => {
    try {
      const response = await fetch(`${URL}/shopping_lists/${id}`, {
        method: "DELETE",
      });
      await response.json();
      return { status: "success" };
    } catch (error) {
      return { error, status: "error" };
    }
  },
  // Categories
  getCategories: async () => {
    try {
      const response = await fetch(`${URL}/categories`);
      const data = await response.json();
      return {status: 'success', data}
    } catch (error) {
      return {status: 'error', error}
    }
  }
};

export default api;

const OrderReducer = (state, action) => {
  switch (action.type) {
    case "SET_ORDERS":
      return {
        ...state,
        orders: Array.isArray(action.payload) ? action.payload : [],
        loading: false,
      };

    case "ADD_ORDER":
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };

    case "UPDATE_STATUS": {
      return {
        ...state,
        orders: state.orders.map((order) =>
          order.id === action.payload.id
            ? { ...order, status: action.payload.status }
            : order
        ),
      };
    }

    case "DELETE_ORDER":
      return {
        ...state,
        orders: state.orders.filter((order) => order.id !== action.payload),
      };

    case "TOGGLE_FAVORITE":
      return {
        ...state,
        orders: state.orders.map((order) =>
          order.id === action.payload && typeof order.favorite === "boolean"
            ? { ...order, favorite: !order.favorite }
            : order
        ),
      };

    case "SET_FAVORITES":
      return {
        ...state,
        favorites: state.orders.filter((order) => order.favorite === true),
      };

    case "UPDATE_RATING": {
      return {
        ...state,
        orders: state.orders.map((order) =>
          order.id === action.payload.id
            ? { ...order, rating: action.payload.rating }
            : order
        ),
      };
    }

    default:
      console.warn("Unknown action:", action.type);
      return state;
  }
};

export default OrderReducer;

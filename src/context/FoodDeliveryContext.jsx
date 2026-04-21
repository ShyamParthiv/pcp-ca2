import { createContext, useContext, useReducer, useEffect } from "react";
import OrderReducer from "../reducer/OrderReducer";
import initialOrders from "../data/initialOrders";
import { sanitizeOrder, sanitizeOrders } from "../utils/sanitizeOrder";

const initialState = {
  orders: [],
  favorites: [],
  loading: true,
};

export const OrderContext = createContext();

export const FoodDeliveryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(OrderReducer, initialState);

  useEffect(() => {
    const cleanedOrders = sanitizeOrders(initialOrders);
    dispatch({ type: "SET_ORDERS", payload: cleanedOrders });
  }, []);

  useEffect(() => {
    dispatch({ type: "SET_FAVORITES" });
  }, [state.orders]);

  const addOrder = (order) => {
    const cleanedOrder = sanitizeOrder(order);
    if (!cleanedOrder) return;
    dispatch({ type: "ADD_ORDER", payload: cleanedOrder });
  };

  const updateStatus = (id, status) =>
    dispatch({ type: "UPDATE_STATUS", payload: { id, status } });

  const deleteOrder = (id) => dispatch({ type: "DELETE_ORDER", payload: id });

  const updateRating = (id, rating) =>
    dispatch({ type: "UPDATE_RATING", payload: { id, rating } });

  const markOrderDelivered = (id) =>
    dispatch({ type: "MARK_DELIVERED", payload: id });

  const toggleFavorite = (id) => dispatch({ type: "TOGGLE_FAVORITE", payload: id });

  return (
    <OrderContext.Provider
      value={{
        orders: state.orders,
        favorites: state.favorites,
        loading: state.loading,
        addOrder,
        updateStatus,
        deleteOrder,
        updateRating,
        markOrderDelivered,
        toggleFavorite,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => useContext(OrderContext);

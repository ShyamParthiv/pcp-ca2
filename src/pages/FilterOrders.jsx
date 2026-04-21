import React, { useMemo, useState } from "react";
import { useOrders } from "../context/FoodDeliveryContext";
import OrderCard from "../components/OrderCard";
import { filterOrdersByRestaurantCaseSensitive } from "../questions/question3";

const FilterOrders = () => {
  const { orders, loading } = useOrders();
  const [restaurantName, setRestaurantName] = useState("");

  const filteredOrders = useMemo(() => {
    return filterOrdersByRestaurantCaseSensitive(orders, restaurantName);
  }, [orders, restaurantName]);

  return (
    <div className="app-container" data-testid="filter-page">
      <h2>Filter Orders</h2>

      <input
        type="text"
        placeholder="Enter Restaurant Name (case-sensitive)"
        value={restaurantName}
        onChange={(event) => setRestaurantName(event.target.value)}
        data-testid="restaurant-filter-input"
      />

      {loading ? <p data-testid="filter-loading">Loading orders...</p> : null}

      {!loading && restaurantName && filteredOrders.length === 0 ? (
        <p data-testid="no-filter-matches">No matching orders found</p>
      ) : null}

      {!loading && filteredOrders.length > 0 ? (
        <div data-testid="filtered-orders-list">
          {filteredOrders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default FilterOrders;

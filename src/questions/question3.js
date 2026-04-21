export const filterOrdersByRestaurantCaseSensitive = (orders, restaurantName) => {
  if (!Array.isArray(orders)) return [];
  if (!restaurantName) return [];

  return orders.filter((order) => order?.restaurant === restaurantName);
};

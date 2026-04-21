export const getPendingOrders = (orders) => {
  if (!Array.isArray(orders)) return [];
  return orders.filter((order) => order?.status === "Pending");
};

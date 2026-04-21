export const findOrderByRouteId = (orders, routeId) => {
  if (!Array.isArray(orders) || !routeId) return null;

  return (
    orders.find((order) => String(order.orderId) === String(routeId)) ||
    orders.find((order) => String(order.id) === String(routeId)) ||
    null
  );
};

export const calculateItemSubtotal = (item) => {
  const price = Number(item?.price);
  const quantity = Number(item?.quantity);

  if (!Number.isFinite(price) || !Number.isFinite(quantity)) return 0;
  return price * quantity;
};

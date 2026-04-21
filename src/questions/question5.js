export const getOrderAnalyticsForQuestion5 = (orders) => {
  if (!Array.isArray(orders)) {
    return {
      totalValidOrders: 0,
      deliveredOrders: 0,
      cancelledOrders: 0,
    };
  }

  return {
    totalValidOrders: orders.length,
    deliveredOrders: orders.filter((order) => order?.status === "Delivered").length,
    cancelledOrders: orders.filter((order) => order?.status === "Cancelled").length,
  };
};

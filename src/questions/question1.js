export const isValidOrderForQuestion1 = (order) => {
  if (!order || typeof order !== "object") return false;

  if (!Array.isArray(order.items) || order.items.length === 0) return false;

  const hasInvalidQuantity = order.items.some((item) => {
    if (!item || typeof item !== "object") return true;
    const qty = Number(item.quantity);
    return !Number.isFinite(qty) || qty <= 0;
  });
  if (hasInvalidQuantity) return false;

  const rawTotalAmount = order.totalAmount;
  const hasValidTotalAmount =
    typeof rawTotalAmount === "number" && Number.isFinite(rawTotalAmount) && rawTotalAmount >= 0;

  return hasValidTotalAmount;
};

export const formatQuestion1Output = (order) => {
  return {
    orederid: order.orderId,
    "customer name": order.customerName,
  };
};

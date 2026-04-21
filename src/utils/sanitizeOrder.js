import { v4 as uuidv4 } from "uuid";
import { isValidOrderForQuestion1 } from "../questions/question1";

// Valid statuses for food delivery orders
const VALID_STATUSES = [
  "Pending",
  "Preparing",
  "Out for Delivery",
  "Delivered",
  "Cancelled",
];

/**
 * Sanitize and validate a single order object.
 * Handles inconsistent/invalid data gracefully.
 */
export const sanitizeOrder = (order) => {
  if (!isValidOrderForQuestion1(order)) return null;

  const rawTotalAmount = order.totalAmount;

  // Validate orderId — generate one if missing
  const orderId =
    order.orderId && typeof order.orderId === "string"
      ? order.orderId
      : `GEN-${uuidv4().slice(0, 6).toUpperCase()}`;

  // Validate customerName
  const customerName =
    typeof order.customerName === "string" && order.customerName.trim() !== ""
      ? order.customerName.trim()
      : typeof order.customerName === "number"
        ? String(order.customerName)
        : "Unknown Customer";

  // Validate restaurant
  const restaurant =
    typeof order.restaurant === "string" && order.restaurant.trim() !== ""
      ? order.restaurant.trim()
      : "Unknown Restaurant";

  const items = order.items
    .filter((item) => item && typeof item === "object" && item.name)
    .map((item) => ({
      name: typeof item.name === "string" ? item.name.trim() : "Unknown Item",
      price: Math.max(0, parseFloat(item.price) || 0),
      quantity: Number(item.quantity),
    }));

  if (items.length === 0) return null;

  const totalAmount = parseFloat(rawTotalAmount.toFixed(2));

  // Validate status — normalize casing and check against valid statuses
  let status = "Pending";
  if (typeof order.status === "string") {
    const normalized = order.status.trim().toLowerCase();
    const match = VALID_STATUSES.find((s) => s.toLowerCase() === normalized);
    status = match || "Pending";
  }

  // Validate deliveryTime
  const deliveryTime =
    typeof order.deliveryTime === "string" && order.deliveryTime.trim() !== ""
      ? order.deliveryTime.trim()
      : "N/A";

  // Validate rating — must be number between 0 and 5
  let rating = null;
  if (
    typeof order.rating === "number" &&
    !isNaN(order.rating) &&
    order.rating >= 0 &&
    order.rating <= 5
  ) {
    rating = parseFloat(order.rating.toFixed(1));
  }

  // Mark if the order was flagged (had any issues)
  const flagged =
    !order.orderId ||
    !order.customerName ||
    typeof order.customerName !== "string" ||
    order.customerName.trim() === "" ||
    !order.restaurant ||
    typeof order.restaurant !== "string" ||
    !Array.isArray(order.items) ||
    order.items.length === 0 ||
    (typeof order.rating === "number" && (order.rating < 0 || order.rating > 5)) ||
    (typeof order.status === "string" &&
      !VALID_STATUSES.find(
        (s) => s.toLowerCase() === order.status.trim().toLowerCase()
      ));

  return {
    id: orderId,
    orderId,
    customerName,
    restaurant,
    items,
    totalAmount,
    status,
    deliveryTime,
    rating,
    flagged: !!flagged,
    favorite: false,
  };
};

/**
 * Sanitize an entire array of orders.
 */
export const sanitizeOrders = (orders) => {
  if (!Array.isArray(orders)) return [];
  return orders
    .map((order) => sanitizeOrder(order))
    .filter((order) => order !== null);
};

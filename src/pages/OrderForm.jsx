import React, { useState, useContext } from "react";
import { OrderContext } from "../context/FoodDeliveryContext";

const OrderForm = () => {
  const { addOrder } = useContext(OrderContext);
  const [formData, setFormData] = useState({
    orderId: "",
    customerName: "",
    restaurant: "",
    status: "Pending",
    deliveryTime: "",
    rating: "",
    itemsInput: "",
  });

  const handleChange = (event) => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const parseItems = (rawItems) => {
    return rawItems
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const [namePart, pricePart, quantityPart] = line.split(",").map((part) => part?.trim());

        return {
          name: namePart || "Unknown Item",
          price: Number(pricePart) || 0,
          quantity: Math.max(1, Number(quantityPart) || 1),
        };
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.customerName.trim() || !formData.restaurant.trim()) {
      alert("Please enter customer name and restaurant");
      return;
    }

    const items = parseItems(formData.itemsInput);
    const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const newOrder = {
      orderId: formData.orderId || undefined,
      customerName: formData.customerName,
      restaurant: formData.restaurant,
      items,
      totalAmount,
      status: formData.status,
      deliveryTime: formData.deliveryTime || "N/A",
      rating: formData.rating === "" ? null : Number(formData.rating),
    };

    addOrder(newOrder);
    setFormData({
      orderId: "",
      customerName: "",
      restaurant: "",
      status: "Pending",
      deliveryTime: "",
      rating: "",
      itemsInput: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="movie-form" data-testid="order-form">
      <input
        type="text"
        placeholder="Order ID (optional)"
        name="orderId"
        value={formData.orderId}
        onChange={handleChange}
        data-testid="input-order-id"
      />
      <input
        type="text"
        placeholder="Customer Name"
        name="customerName"
        value={formData.customerName}
        onChange={handleChange}
        data-testid="input-customer-name"
      />
      <input
        type="text"
        placeholder="Restaurant"
        name="restaurant"
        value={formData.restaurant}
        onChange={handleChange}
        data-testid="input-restaurant"
      />

      <textarea
        name="itemsInput"
        rows="4"
        placeholder="Items (one per line: name,price,quantity)"
        value={formData.itemsInput}
        onChange={handleChange}
        data-testid="input-items"
      />

      <select name="status" value={formData.status} onChange={handleChange} data-testid="input-status">
        <option value="Pending">Pending</option>
        <option value="Preparing">Preparing</option>
        <option value="Out for Delivery">Out for Delivery</option>
        <option value="Delivered">Delivered</option>
        <option value="Cancelled">Cancelled</option>
      </select>

      <input
        type="text"
        placeholder="Delivery Time (e.g. 35 mins)"
        name="deliveryTime"
        value={formData.deliveryTime}
        onChange={handleChange}
        data-testid="input-delivery-time"
      />

      <input
        type="number"
        min="0"
        max="5"
        step="0.5"
        placeholder="Rating (0-5)"
        name="rating"
        value={formData.rating}
        onChange={handleChange}
        data-testid="input-rating"
      />

      <p className="order-form-help">Invalid item lines are auto-corrected during sanitization.</p>

      <button type="submit" data-testid="add-order-btn">
        Add Order
      </button>
    </form>
  );
};

export default OrderForm;

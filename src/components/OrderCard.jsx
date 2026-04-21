import { useOrders } from "../context/FoodDeliveryContext";
import { Link } from "react-router-dom";
import { formatQuestion1Output } from "../questions/question1";

const STATUS_FLOW = [
  "Pending",
  "Preparing",
  "Out for Delivery",
  "Delivered",
  "Cancelled",
];

const OrderCard = ({ order }) => {
  const { updateStatus, deleteOrder, toggleFavorite, updateRating } = useOrders();
  const q1Output = formatQuestion1Output(order);

  const handleNextStatus = () => {
    const currentIndex = STATUS_FLOW.indexOf(order.status);
    const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % STATUS_FLOW.length;
    updateStatus(order.id, STATUS_FLOW[nextIndex]);
  };

  const handleRatingChange = (value) => {
    const numericValue = Number(value);
    if (Number.isNaN(numericValue) || numericValue < 0 || numericValue > 5) return;
    updateRating(order.id, numericValue);
  };

  return (
    <div className={`movie-card ${order.flagged ? "flagged" : ""}`} data-testid="order-item">
      <div className="movie-header">
        <h3 data-testid="order-id">Order #{order.orderId}</h3>
        <span className="genre-tag" data-testid="order-status">{order.status}</span>
      </div>

      <pre data-testid="question1-output">
        {`"orederid": ${JSON.stringify(q1Output.orederid)}\n"customer name": ${JSON.stringify(q1Output["customer name"])}`}
      </pre>

      <p data-testid="order-customer">Customer: {order.customerName}</p>
      <p data-testid="order-restaurant">Restaurant: {order.restaurant}</p>
      <p data-testid="order-delivery-time">Delivery Time: {order.deliveryTime}</p>

      <ul className="items-list" data-testid="order-items">
        {order.items.map((item, index) => (
          <li key={`${order.id}-${item.name}-${index}`}>
            {item.name} x {item.quantity} @ ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>

      <p className="order-meta" data-testid="order-total">
        Total Amount: <strong>${order.totalAmount.toFixed(2)}</strong>
      </p>

      <p className="order-meta" data-testid="order-rating">
        Rating: <strong>{order.rating ?? "Not Rated"}</strong>
      </p>

      {order.flagged ? <p className="flag-badge">Contains corrected invalid fields</p> : null}

      <div className="movie-actions">
        <Link to={`/orders/${order.orderId}`} data-testid="view-order-details">
          View Details
        </Link>

        <button data-testid="advance-status" onClick={handleNextStatus}>
          Next Status
        </button>

        <select
          data-testid="rating-select"
          value={order.rating ?? ""}
          onChange={(event) => handleRatingChange(event.target.value)}
        >
          <option value="">Set Rating</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <button data-testid="toggle-favorite" onClick={() => toggleFavorite(order.id)}>
          {order.favorite ? "Unfavorite" : "Favorite"}
        </button>

        <button data-testid="delete-order" onClick={() => deleteOrder(order.id)} className="delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default OrderCard;

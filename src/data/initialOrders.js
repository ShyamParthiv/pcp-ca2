// Food Delivery Orders Dataset
// NOTE: This dataset intentionally contains inconsistent and invalid entries
// that must be handled/validated by the application

const initialOrders = [
  {
    orderId: "ORD001",
    customerName: "Aarav Sharma",
    restaurant: "Pizza Palace",
    items: [
      { name: "Margherita Pizza", price: 12.99, quantity: 2 },
      { name: "Garlic Bread", price: 4.99, quantity: 1 },
      { name: "Coke", price: 2.5, quantity: 2 },
    ],
    totalAmount: 35.97,
    status: "Delivered",
    deliveryTime: "35 mins",
    rating: 4.5,
  },
  {
    orderId: "ORD002",
    customerName: "Priya Patel",
    restaurant: "Sushi World",
    items: [
      { name: "California Roll", price: 14.99, quantity: 1 },
      { name: "Miso Soup", price: 3.99, quantity: 2 },
    ],
    totalAmount: 22.97,
    status: "Preparing",
    deliveryTime: "45 mins",
    rating: null, // Invalid: null rating
  },
  {
    // Invalid: missing orderId
    customerName: "Rahul Verma",
    restaurant: "Burger Barn",
    items: [
      { name: "Double Cheeseburger", price: 9.99, quantity: 1 },
      { name: "Fries", price: "3.49", quantity: 1 }, // Invalid: price is a string
    ],
    totalAmount: 13.48,
    status: "Out for Delivery",
    deliveryTime: "20 mins",
    rating: 3,
  },
  {
    orderId: "ORD004",
    customerName: "", // Invalid: empty customer name
    restaurant: "Taco Fiesta",
    items: [
      { name: "Beef Tacos", price: 8.99, quantity: 3 },
      { name: "Nachos", price: 6.49, quantity: 1 },
    ],
    totalAmount: 33.46,
    status: "Delivered",
    deliveryTime: "30 mins",
    rating: 5,
  },
  {
    orderId: "ORD005",
    customerName: "Sneha Reddy",
    restaurant: "Thai Orchid",
    items: [
      { name: "Pad Thai", price: 13.99, quantity: 1 },
      { name: "Spring Rolls", price: 5.99, quantity: 2 },
      { name: "Thai Iced Tea", price: 3.49, quantity: 1 },
    ],
    totalAmount: 29.46,
    status: "Delivered",
    deliveryTime: "40 mins",
    rating: 4,
  },
  {
    orderId: "ORD006",
    customerName: "Vikram Singh",
    restaurant: "Dragon Wok",
    items: [], // Invalid: empty items array
    totalAmount: 0,
    status: "Cancelled",
    deliveryTime: "N/A",
    rating: 1,
  },
  {
    orderId: "ORD007",
    customerName: "Ananya Gupta",
    restaurant: "Pizza Palace",
    items: [
      { name: "Pepperoni Pizza", price: 14.99, quantity: 1 },
      { name: "Caesar Salad", price: 7.99, quantity: 1 },
    ],
    totalAmount: 22.98,
    status: "Delivered",
    deliveryTime: "25 mins",
    rating: 4.8,
  },
  {
    orderId: "ORD008",
    customerName: "Karthik Nair",
    restaurant: "Burger Barn",
    items: [
      { name: "Veggie Burger", price: 8.49, quantity: 2 },
      { name: "Onion Rings", price: -2.99, quantity: 1 }, // Invalid: negative price
    ],
    totalAmount: 13.99,
    status: "DELIVERED", // Invalid: inconsistent casing
    deliveryTime: "30 mins",
    rating: 7, // Invalid: rating > 5
  },
  {
    orderId: "ORD009",
    customerName: "Meera Joshi",
    restaurant: "Sushi World",
    items: [
      { name: "Dragon Roll", price: 16.99, quantity: 1 },
      { name: "Edamame", price: 4.99, quantity: 1 },
      { name: "Green Tea", price: 2.99, quantity: 2 },
    ],
    totalAmount: 27.96,
    status: "Pending",
    deliveryTime: "50 mins",
    rating: undefined, // Invalid: undefined rating
  },
  {
    orderId: "ORD010",
    customerName: "Arjun Mehta",
    restaurant: null, // Invalid: null restaurant
    items: [
      { name: "Chicken Biryani", price: 11.99, quantity: 2 },
      { name: "Raita", price: 2.49, quantity: 1 },
    ],
    totalAmount: 26.47,
    status: "Delivered",
    deliveryTime: "35 mins",
    rating: 3.5,
  },
  {
    orderId: "ORD011",
    customerName: "Diya Kapoor",
    restaurant: "Thai Orchid",
    items: [
      { name: "Green Curry", price: 12.99, quantity: 1 },
      { name: "Jasmine Rice", price: 2.99, quantity: 1 },
    ],
    totalAmount: 15.98,
    status: "Out for Delivery",
    deliveryTime: "15 mins",
    rating: 0, // Edge case: zero rating
  },
  {
    orderId: "ORD012",
    customerName: "Rohan Das",
    restaurant: "Taco Fiesta",
    items: [
      { name: "Chicken Quesadilla", price: 9.49, quantity: 1 },
      { name: "Churros", price: 4.99, quantity: 1 },
      { name: "Horchata", price: 3.49, quantity: 2 },
    ],
    totalAmount: 21.46,
    status: "Delivered",
    deliveryTime: "28 mins",
    rating: 4.2,
  },
  {
    orderId: "ORD013",
    customerName: 12345, // Invalid: number instead of string
    restaurant: "Dragon Wok",
    items: [
      { name: "Kung Pao Chicken", price: 11.49, quantity: 1 },
      { name: "Fried Rice", price: 6.99, quantity: 1 },
    ],
    totalAmount: 18.48,
    status: "Preparing",
    deliveryTime: "40 mins",
    rating: 3.8,
  },
  {
    orderId: "ORD014",
    customerName: "Ishaan Choudhary",
    restaurant: "Pizza Palace",
    items: [
      { name: "BBQ Chicken Pizza", price: 15.99, quantity: 1 },
    ],
    totalAmount: "15.99", // Invalid: string instead of number
    status: "randomstatus", // Invalid: unknown status
    deliveryTime: "20 mins",
    rating: 2.5,
  },
  {
    orderId: "ORD015",
    customerName: "Kavya Iyer",
    restaurant: "Burger Barn",
    items: [
      { name: "Classic Burger", price: 7.99, quantity: 1 },
      { name: "Milkshake", price: 5.49, quantity: 1 },
      { name: "Fries", price: 3.49, quantity: 1 },
    ],
    totalAmount: 16.97,
    status: "Delivered",
    deliveryTime: "22 mins",
    rating: 4.9,
  },
  {
    orderId: "ORD016",
    customerName: "Aditya Rao",
    restaurant: "Sushi World",
    items: null, // Invalid: null items
    totalAmount: 30.0,
    status: "Pending",
    deliveryTime: "55 mins",
    rating: -1, // Invalid: negative rating
  },
  {
    orderId: "ORD017",
    customerName: "Nisha Malhotra",
    restaurant: "Thai Orchid",
    items: [
      { name: "Tom Yum Soup", price: 8.99, quantity: 1 },
      { name: "Mango Sticky Rice", price: 6.49, quantity: 1 },
    ],
    totalAmount: 15.48,
    status: "Delivered",
    deliveryTime: "32 mins",
    rating: 4.6,
  },
  {
    orderId: "ORD018",
    customerName: "Siddharth Bose",
    restaurant: "Taco Fiesta",
    items: [
      { name: "Fish Tacos", price: 10.99, quantity: 2 },
      { name: "Guacamole", price: 4.49, quantity: 1 },
    ],
    totalAmount: 26.47,
    status: "Preparing",
    deliveryTime: "38 mins",
    rating: 3.2,
  },
  {
    orderId: "ORD019",
    customerName: "Tanvi Desai",
    restaurant: "Dragon Wok",
    items: [
      { name: "Sweet & Sour Pork", price: 12.49, quantity: 1 },
      { name: "Dim Sum", price: 8.99, quantity: 1 },
      { name: "Jasmine Tea", price: 2.49, quantity: 2 },
    ],
    totalAmount: 26.46,
    status: "Delivered",
    deliveryTime: "42 mins",
    rating: 4.1,
  },
  {
    orderId: "ORD020",
    customerName: "Raj Kumar",
    restaurant: "Pizza Palace",
    items: [
      { name: "Hawaiian Pizza", price: 13.99, quantity: 1 },
      { name: "Buffalo Wings", price: 8.99, quantity: 1 },
      { name: "Pepsi", price: 2.5, quantity: 3 },
    ],
    totalAmount: 30.48,
    status: "Out for Delivery",
    deliveryTime: "18 mins",
    rating: null,
  },
];

export default initialOrders;

# Question-wise Answer Index

## Question 1

Requirement:
- Display valid orders only.
- Show each order using a reusable component.
- Ignore orders where items array is empty, quantity <= 0, or totalAmount is invalid.

Answer files:
- Validation logic: src/questions/question1.js
- Validation usage in app: src/utils/sanitizeOrder.js
- Reusable display component: src/components/OrderCard.jsx
- Reusable list rendering: src/components/OrderList.jsx

## Question 2

Requirement:
- Order detail view using route /orders/:id.
- Display complete details for selected order.
- Show all items with calculated subtotal.
- Edge case: invalid id should show Order Not Found.

Answer files:
- Question 2 helpers: src/questions/question2.js
- Route setup: src/routers/AppRouter.jsx
- Detail view page: src/pages/OrderDetails.jsx
- Detail navigation from reusable card: src/components/OrderCard.jsx

## Question 3

Requirement:
- Route: /filter
- Filter orders by restaurant name
- Input is case-sensitive
- Must use .filter()
- Must not refetch data
- Display only matching orders

Answer files:
- Filter helper (.filter): src/questions/question3.js
- Route setup: src/routers/AppRouter.jsx
- Filter page (uses context data, no refetch): src/pages/FilterOrders.jsx
- Reusable display component reuse: src/components/OrderCard.jsx

## Question 4

Requirement:
- Route: /orders
- Add ability to mark an order delivered
- Must use reducer action
- Delivered order must not appear in pending list
- Status should update automatically

Answer files:
- Pending list helper: src/questions/question4.js
- Reducer action: src/reducer/OrderReducer.jsx
- Context dispatch method: src/context/FoodDeliveryContext.jsx
- Route setup: src/routers/AppRouter.jsx
- Orders status page: src/pages/OrderStatusLogic.jsx

## Question 5

Requirement:
- Route: /stats
- Display total valid orders
- Display delivered orders
- Display cancelled orders

Answer files:
- Analytics helper: src/questions/question5.js
- Stats route setup: src/routers/AppRouter.jsx
- Dashboard page: src/components/OrderStats.jsx

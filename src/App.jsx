import React from "react";
import AppRouter from "./routers/AppRouter.jsx";
import { FoodDeliveryProvider } from "./context/FoodDeliveryContext.jsx";

const App = () => {
  return (
    <FoodDeliveryProvider>
      <AppRouter />
    </FoodDeliveryProvider>
  );
};

export default App;

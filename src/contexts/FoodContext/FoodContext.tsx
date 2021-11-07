import React, { createContext } from "react";

interface Food {
  meal: "Pizza 🍕" | "Burger 🍔";
}

export const FoodContext = createContext<Food>({
  meal: "Pizza 🍕",
});

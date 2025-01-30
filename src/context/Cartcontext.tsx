"use client";

import React, { createContext, useEffect, ReactNode } from "react";

import { useState } from "react";

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartState {
  items: CartItem[];
  totalAmount: number;
}

interface CartContextProps extends CartState {
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
}

const initialCartState: CartState = {
  items: [],
  totalAmount: 0,
};

const CartContext = createContext<CartContextProps>({
  ...initialCartState,
  addItem: () => {},
  removeItem: () => {},
});

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartState, setCartState] = useState<CartState>(() => {
    const localData = localStorage.getItem("cart");
    return localData ? JSON.parse(localData) : initialCartState;
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartState));
  }, [cartState]);

  const addItemToCartHandler = (item: CartItem) => {
    setCartState((prevState) => {
      const updatedTotalAmount =
        prevState.totalAmount + item.price * item.quantity;
      const existingCartItemIndex = prevState.items.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      const existingCartItem = prevState.items[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + item.quantity,
        };
        updatedItems = [...prevState.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = prevState.items.concat(item);
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    });
  };

  const removeItemFromCartHandler = (id: number) => {
    setCartState((prevState) => {
      const itemIndex = prevState.items.findIndex((item) => item.id === id);
      const itemToRemove = prevState.items[itemIndex];
      const updatedAmount =
        prevState.totalAmount - itemToRemove.price * itemToRemove.quantity;
      const filteredItems = prevState.items.filter((item) => item.id !== id);

      return {
        items: filteredItems,
        totalAmount: updatedAmount,
      };
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export { CartContext, CartProvider };
